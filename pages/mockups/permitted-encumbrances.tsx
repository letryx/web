import {
  Stack,
  Box,
  UnorderedList,
  OrderedList,
  ListItem,
  Text,
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
    <Layout title="Letryx">
      <Box fontSize="md">
        <Stack>
          <NextChakraLink fontSize="xl" href={`/mockups/${slug}`}>
            {name} Benchmark
          </NextChakraLink>
          <Text>
            {header.map((props) => (
              <Statement {...props} />
            ))}
          </Text>
          <OrderedList spacing={4}>
            {children.map(({ statements }) => (
              <ListItem ml={4}>
                {statements.map((props) => (
                  <Statement {...props} />
                ))}
              </ListItem>
            ))}
          </OrderedList>

          <UnorderedList pt={4} title="Examples">
            {examples.map((def: string) => (
              <ListItem>{def}</ListItem>
            ))}
          </UnorderedList>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Mockup;
