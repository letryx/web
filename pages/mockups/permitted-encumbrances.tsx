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
  <Flex flexWrap="wrap" py={2}>
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
    <Tooltip label={s.t == 'f' ? s.r : undefined}>{`${s.c} `}</Tooltip>
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
          fontFamily="serif"
          maxWidth="800px"
          fontSize={['1em', '1.1em']}
          textAlign="justify"
        >
          <Text pb={2}>
            {header.map((sm) => (
              <Statement key={sm.c} {...sm} />
            ))}
          </Text>
          {children.map(({ statements, clauseName }) => (
            <Text key={statements[0].c} pb={4}>
              <Text as="span" mx={['1em', '2em']}>
                ({clauseName})
              </Text>
              {statements.map((sm) => (
                <Statement key={sm.c} {...sm} />
              ))}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Mockup;
