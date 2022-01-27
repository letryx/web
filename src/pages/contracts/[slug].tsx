/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { SkeletonText } from '@chakra-ui/react';
import { ContractIFrame } from 'components/contract-show/frame';
import { Layout } from 'components/layout';
import { useGetSecContractQuery } from 'lib/generated/graphql/apollo-schema';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

interface ContractShowPageProps {
  uid: string;
}

const ContractShowPage: FC<ContractShowPageProps> = ({ uid }) => {
  const router = useRouter();
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

// auth0 wrapper:
// https://community.auth0.com/t/accessing-user-data-inside-withpageauthrequired/65148
export const getServerSideProps = withPageAuthRequired();

export default ContractShowPage;
