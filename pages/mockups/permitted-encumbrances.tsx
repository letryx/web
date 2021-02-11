import {
  Stack,
  OrderedList,
  ListItem,
  Text,
  Tab,
  Tabs,
  TabList,
  Badge,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Layout } from 'components/layout';
import { NextChakraLink } from 'components/next-chakra-link';
import { GetStaticProps } from 'next';
import {
  clauseComparison,
  IClause,
  IStatement,
} from 'pages/api/mockups/permitted-encumbrances';

// export const icons = [
//   MdSignalCellular0Bar,
//   MdSignalCellular1Bar,
//   MdSignalCellular2Bar,
//   MdSignalCellular3Bar,
//   MdSignalCellular4Bar,
// ];

export const getStaticProps: GetStaticProps = async () => ({
  props: { clause: clauseComparison },
  revalidate: 1, // in seconds
});

const Statement: FC<IStatement> = ({ t, c }) =>
  t === 'r' ? (
    <Text as="span">{`${c} `}</Text>
  ) : (
    <Text as="span" color="royalblue">
      {`${c} `}
    </Text>
  );

const Mockup: FC<{ clause: IClause }> = ({ clause }) => {
  const { name, slug, header, children, examples } = clause;

  return (
    <Layout
      title="Permitted Encumbrances"
      breadcrumbs={[{ title: 'Clauses', href: '/mockups' }]}
    >
      <Stack fontSize="md">
        <NextChakraLink pb={0} fontSize="xl" href={`/mockups/${slug}`}>
          {name}
        </NextChakraLink>
        <Tabs>
          <TabList>
            <Tab>Benchmark</Tab>
            <Tab>
              Examples{' '}
              <Badge ml={2} mt={0}>
                {examples.length}
              </Badge>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text pb={2}>
                {header.map((props) => (
                  <Statement key={props.c} {...props} />
                ))}
              </Text>
              <OrderedList spacing={4}>
                {children.map(({ statements }) => (
                  <ListItem key={statements[0].c} ml={4}>
                    {statements.map((props) => (
                      <Statement key={props.c} {...props} />
                    ))}
                  </ListItem>
                ))}
              </OrderedList>
            </TabPanel>
            <TabPanel>
              <OrderedList pt={4} title="Examples">
                {examples.map((def: string) => (
                  <ListItem key={def}>{def}</ListItem>
                ))}
              </OrderedList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Layout>
  );
};

export default Mockup;
