/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { DownloadIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  IconButton,
  SkeletonText,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ContractIFrame } from 'components/contract-show/frame';
import { ShowDate } from 'components/date';
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
        {contract && (
          <Stack maxWidth="800px">
            <Flex fontSize="1.2rem">
              <Center>
                <Box>
                  <Text as="span" mr={3}>
                    {contract.description || contract.attachment_type}
                  </Text>
                  <Text as="span" fontSize="80%" fontWeight="normal">
                    {contract.sec_filing.filing_type}{' '}
                    {contract.description &&
                      `, ${contract.attachment_type || ''}`}
                  </Text>
                  <Text fontSize="80%" fontWeight="normal">
                    Filed by {contract.sec_filing.sec_company.name} on{' '}
                    <ShowDate
                      kind="long"
                      date={contract.sec_filing.filing_date || ''}
                    />
                  </Text>
                </Box>
              </Center>
              <Spacer />
              <Center>
                <IconButton
                  as="a"
                  variant="ghost"
                  aria-label="export pdf"
                  icon={<DownloadIcon />}
                  href={`/api/contracts/pdf?uid=${uid}`}
                />
              </Center>
            </Flex>
            <ContractIFrame {...contract} />
          </Stack>
        )}
      </SkeletonText>
    </Layout>
  );
};

// auth0 wrapper:
// https://community.auth0.com/t/accessing-user-data-inside-withpageauthrequired/65148
export const getServerSideProps = withPageAuthRequired({
  // eslint-disable-next-line @typescript-eslint/require-await
  getServerSideProps: async ({ query }) => {
    const uid = typeof query.slug === 'object' ? query.slug[0] : query.slug;
    return { props: { uid } };
  },
});

export default ContractShowPage;
