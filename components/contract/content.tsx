import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { ContractIFrame } from 'components/contract/frame';
import { ShowDate } from 'components/date';
import {
  SearchResultFragment,
  useGetSecContractQuery,
} from 'lib/generated/graphql/apollo-schema';
import { FC } from 'react';

interface Props {
  contract?: Pick<
    SearchResultFragment,
    'accession_number' | 'sequence' | 'company_cik'
  >;
  isOpen: boolean;
  onClose: () => void;
}
export const ContractContent: FC<Props> = ({ contract, isOpen, onClose }) => {
  const { data, loading } = useGetSecContractQuery({
    variables: {
      accession_number: contract?.accession_number || '',
      sequence: contract?.sequence || 0,
    },
    skip: !isOpen || !contract,
  });

  const { description, sec_filing, attachment_type } =
    data?.sec_filing_attachment_by_pk || {};
  const { filing_date, filing_type, sec_company } = sec_filing || {};
  const { name: companyName } = sec_company || {};
  const htmlString = data?.sec_filing_attachment_by_pk?.contents || '';

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
      <ModalOverlay />
      <ModalContent width="95vw" maxWidth="900px">
        <ModalHeader>
          {loading || !contract ? (
            <Skeleton>{'x'.repeat(20)}</Skeleton>
          ) : (
            <>
              <Text as="span" mr={3}>
                {description || attachment_type}
              </Text>
              <Text as="span" fontSize="80%" fontWeight="normal">
                {filing_type} {description && `, ${attachment_type || ''}`}
              </Text>
              <Text fontSize="80%" fontWeight="normal">
                Filed by {companyName} on{' '}
                <ShowDate kind="long" date={filing_date || ''} />
              </Text>
            </>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          px={[2, 4, 6]}
          id={`contract-modal-${contract?.accession_number || ''}-${
            contract?.sequence || ''
          }`}
        >
          <SkeletonText isLoaded={!loading} noOfLines={30}>
            {!!contract && <ContractIFrame {...{ htmlString, ...contract }} />}
          </SkeletonText>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
