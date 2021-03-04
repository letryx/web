import {
  Badge,
  Flex,
  Heading,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { GetStaticProps } from 'next';
import {
  clauseComparison,
  ISection,
  IStatement,
} from 'pages/api/mockups/permitted-encumbrances';
import { FC } from 'react';

export const getStaticProps: GetStaticProps = async () => ({
  props: { clause: clauseComparison },
  revalidate: 1, // in seconds
});

const Deal: FC = () => (
  <Flex flexWrap="wrap" py={2} maxWidth="800px">
    <Stack my={2} flexGrow={2}>
      <Heading fontSize={['xl', 'xl', '2xl']} maxW="90vw" isTruncated>
        <Badge
          colorScheme="green"
          w="3rem"
          textAlign="center"
          mr={2}
          display={['block', 'inline']}
        >
          Seller
        </Badge>
        <Tooltip label="Jones Energy Holdings, LLC">
          Jones Energy Holdings, LLC
        </Tooltip>
      </Heading>
      <Heading fontSize={['xl', 'xl', '2xl']} maxW="90vw" isTruncated>
        <Badge
          colorScheme="blue"
          w="3rem"
          textAlign="center"
          mr={2}
          display={['block', 'inline']}
        >
          Buyer
        </Badge>
        <Tooltip label="Foundation Energy Fund VI-A, LP">
          Foundation Energy Fund VI-A, LP
        </Tooltip>
      </Heading>
    </Stack>
    <Stat textAlign={['left', 'right']}>
      <StatLabel>Purchase Price</StatLabel>
      <StatNumber>$201,000,000</StatNumber>
      <StatHelpText>
        <Tooltip label="Execution Date">June 22, 2017</Tooltip>
      </StatHelpText>
    </Stat>
  </Flex>
);

const Statement: FC<IStatement> = (s) => (
  <Text as="span" color={s.t === 'r' ? undefined : 'royalblue'}>
    <Tooltip label={s.t === 'f' ? s.r : undefined}>{`${s.c} `}</Tooltip>
  </Text>
);

const Mockup: FC<{ clause: ISection }> = ({ clause }) => {
  const { header, children } = clause;

  return (
    <Layout
      title="Permitted Encumbrances"
      breadcrumbs={[
        { title: 'Purchase and Sale Agreements', href: '/mockups' },
      ]}
    >
      <Stack fontSize="md">
        <Deal />
        <Stack
          fontFamily="contract"
          maxWidth="720px"
          fontWeight="normal"
          fontSize="1em"
          pl={['2px', '10px', '50px']}
          textAlign="justify"
          spacing="0"
        >
          <Text pb={2}>
            {header.map((sm, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Statement key={`section-${i}`} {...sm} />
            ))}
          </Text>
          {children.map(({ statements, clauseName }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text key={`clause-${i}`} pb={4}>
              <Text
                as="span"
                display="inline-block"
                textAlign="center"
                width={['3em', '5em', '6em']}
                color="gray.400"
                style={{ letterSpacing: '3px' }}
              >
                (
                <Text
                  as="span"
                  color={useColorModeValue('gray.700', 'gray.100')}
                >
                  {clauseName}
                </Text>
                )
              </Text>
              {statements.map((sm, j) => (
                // eslint-disable-next-line react/no-array-index-key
                <Statement key={`sm-${i}-${j}`} {...sm} />
              ))}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Mockup;
