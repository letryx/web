import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { SkeletonText } from '@chakra-ui/react';
import { ContractIFrame } from 'components/contract-show/frame';
import { Layout } from 'components/layout';
import { useGetSecContractQuery } from 'lib/generated/graphql/apollo-schema';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ContractShowPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const uid = ((slug as string) || '').split('-')[0];
  if (!uid) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/404');
  }

  const { data, loading } = useGetSecContractQuery({
    variables: {
      uid,
    },
    skip: !uid,
  });

  const contract = data?.sec_filing_attachment_by_pk;

  return (
    <Layout title="Contracts" showMatterNumber>
      <SkeletonText isLoaded={!loading} noOfLines={30}>
        {contract && <ContractIFrame {...contract} />}
      </SkeletonText>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default ContractShowPage;
