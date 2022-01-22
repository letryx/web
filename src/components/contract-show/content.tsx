import { SkeletonText } from '@chakra-ui/react';
import { ContractIFrame } from 'components/contract-show/frame';
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
  removeScroll?: boolean;
}
export const ContractContent: FC<Props> = ({ contract, removeScroll }) => {
  const { data, loading } = useGetSecContractQuery({
    variables: {
      accession_number: contract?.accession_number || '',
      sequence: contract?.sequence || 0,
    },
    skip: !contract,
  });

  const htmlString = data?.sec_filing_attachment_by_pk?.contents || '';

  return (
    <SkeletonText isLoaded={!loading} noOfLines={30}>
      {!!contract && (
        <ContractIFrame {...{ htmlString, removeScroll, ...contract }} />
      )}
    </SkeletonText>
  );
};
