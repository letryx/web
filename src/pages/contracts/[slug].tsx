import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { SkeletonText } from '@chakra-ui/react';
import { ContractIFrame } from 'components/contract-show/frame';
import { Layout } from 'components/layout';
import { useGetSecContractQuery } from 'lib/generated/graphql/apollo-schema';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ContractShowPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const uid = ((slug as string) || '').split('-')[0];
  useEffect(() => {
    if (!uid) {
      // No slug in the url, shouldn't happen since we have a root
      // contracts page as well which gets 'undefined' entries
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/404');
    }
  }, [uid, router]);

  const { data, loading } = useGetSecContractQuery({
    variables: {
      uid,
    },
    skip: !uid,
  });

  const contract = data?.sec_filing_attachment_by_pk;

  useEffect(() => {
    if (!loading && !data?.sec_filing_attachment_by_pk) {
      // Bad slug, send to a 404 page.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push('/404');
    }
  }, [data, loading, router]);

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
