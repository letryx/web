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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { base58 } from '@scure/base';
import { ContractContent } from 'components/contract-show/content';
import { ShowDate } from 'components/date';
import {
  SearchResultFragment,
  useGetSecContractQuery,
} from 'lib/generated/graphql/apollo-schema';
import { useRouter } from 'next/router';
import { FC, useCallback, useRef } from 'react';

export const ContractModal: FC<SearchResultFragment> = (contract) => {
  const { accession_number, sequence, company_cik } = contract;
  const router = useRouter();
  const prevPathname = useRef<undefined | string>();
  const onOpenHistory = useCallback(() => {
    prevPathname.current = router.pathname;
    const slug = base58.encode(
      Buffer.from(`${accession_number}*${sequence}*${company_cik}`, 'utf8')
    );
    window.history.replaceState(null, document.title, `/contracts/${slug}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accession_number, sequence, company_cik]);
  const onCloseHistory = useCallback(() => {
    if (prevPathname) {
      window.history.replaceState(null, document.title, prevPathname.current);
      prevPathname.current = undefined;
    }
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: onOpenHistory,
    onClose: onCloseHistory,
  });

  const { data, loading } = useGetSecContractQuery({
    variables: {
      accession_number,
      sequence,
    },
    skip: !isOpen || !contract,
  });
  const { description, sec_filing, attachment_type } =
    data?.sec_filing_attachment_by_pk || {};
  const { filing_date, filing_type, sec_company } = sec_filing || {};
  const { name: companyName } = sec_company || {};
  return (
    <>
      <Button onClick={onOpen}>View</Button>
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
            id={`contract-modal-${accession_number}-${sequence}`}
          >
            <ContractContent
              contract={contract}
              isOpen={isOpen}
              onClose={onClose}
              removeScroll
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
