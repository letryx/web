import { Button, useDisclosure } from '@chakra-ui/react';
import { base58 } from '@scure/base';
import { SearchResultFragment } from 'lib/generated/graphql/apollo-schema';
import { FC, useCallback, useRef } from 'react';
import { ContractContent } from './content';

export const ContractModal: FC<SearchResultFragment> = (contract) => {
  const { accession_number, sequence, company_cik } = contract;
  const pushed = useRef(false);
  const onOpenHistory = useCallback(() => {
    pushed.current = true;
    const slug = base58.encode(
      Buffer.from(`${accession_number}*${sequence}*${company_cik}`, 'utf8')
    );
    window.history.pushState(null, 'Contract', `/contracts/${slug}`);
  }, [accession_number, sequence, company_cik]);
  const onCloseHistory = useCallback(() => {
    if (pushed.current) {
      window.history.back();
      pushed.current = false;
    }
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: onOpenHistory,
    onClose: onCloseHistory,
  });
  return (
    <>
      <Button onClick={onOpen}>View</Button>
      <ContractContent contract={contract} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
