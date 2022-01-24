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
  useDisclosure,
} from '@chakra-ui/react';
import { ShowDate } from 'components/date';
import {
  SearchResultFragment,
  useGetSecContractQuery,
} from 'lib/generated/graphql/apollo-schema';
import { useRouter } from 'next/router';
import { FC, useCallback, useRef } from 'react';
import { ContractIFrame } from './frame';

export const ContractModal: FC<SearchResultFragment> = (contract) => {
  const { uid } = contract;
  const { pathname } = useRouter();
  const prevPathname = useRef<undefined | string>();
  const onOpenHistory = useCallback(() => {
    prevPathname.current = pathname;
    window.history.replaceState(null, document.title, `/contracts/${uid}`);
  }, [pathname, uid]);
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
      uid,
    },
    skip: !isOpen || !contract,
  });
  const { description, sec_filing, attachment_type } =
    data?.sec_filing_attachment_by_pk || {};
  const { filing_date, filing_type, sec_company } = sec_filing || {};
  const { name: companyName } = sec_company || {};
  const contraceWithContents = data?.sec_filing_attachment_by_pk;
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
          <ModalBody px={[2, 4, 6]} id={`contract-modal-${uid}`}>
            <SkeletonText isLoaded={!loading} noOfLines={30}>
              {contraceWithContents && (
                <ContractIFrame removeScroll {...contraceWithContents} />
              )}
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
    </>
  );
};
