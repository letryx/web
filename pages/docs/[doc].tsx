import {
  Container,
  Heading,
  HeadingProps,
  Link,
  LinkProps,
  ListItem,
  ListItemProps,
  ListProps,
  OrderedList,
  Text,
  TextProps,
  UnorderedList,
} from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { promises as fs } from 'fs';
import { GetStaticPaths, GetStaticProps, NextPageContext } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';

// https://richardhaines.dev/create-a-landing-page-with-next-and-mdx/

const components = {
  h1: ({ children }: HeadingProps) => (
    <Heading size="lg" my={8}>
      {children}
    </Heading>
  ),
  h2: ({ children }: HeadingProps) => (
    <Heading size="md" mt={8} mb={4} fontWeight="semibold" lineHeight="tall">
      {children}
    </Heading>
  ),
  h3: ({ children }: HeadingProps) => (
    <Heading size="sm" my={4}>
      {children}
    </Heading>
  ),
  // use #### for footer
  h4: ({ children }: HeadingProps) => <Text my={12}>{children}</Text>,
  ul: ({ children }: ListProps) => (
    <UnorderedList my={2} pl={4}>
      {children}
    </UnorderedList>
  ),
  ol: ({ children }: ListProps) => (
    <OrderedList my={2} pl={4}>
      {children}
    </OrderedList>
  ),
  li: ({ children }: ListItemProps) => <ListItem>{children}</ListItem>,
  p: ({ children }: TextProps) => <Text my={2}>{children}</Text>,
  a: ({ children, ...props }: LinkProps) => (
    <Link {...props} target="_blank" style={{ textDecoration: 'underline' }}>
      {children}
    </Link>
  ),
  strong: ({ children }: TextProps) => (
    <Text as="span" fontWeight="bold">
      {children}
    </Text>
  ),
  Layout,
};

const Doc: FC<NextPageContext & { content: MDXRemoteSerializeResult }> = ({
  content,
}) => {
  return (
    <Layout>
      <Container maxWidth="700px" textAlign="justify">
        <MDXRemote {...content} components={components} />
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docsDir = path.join(process.cwd(), 'docs');
  const filenames = await fs.readdir(docsDir);

  return {
    fallback: false,
    paths: filenames.map((filename) => ({
      params: { doc: filename.replace(/\.mdx?$/, '') },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { doc } = context.params as ParsedUrlQuery & { doc: string };
  const docPath = path.join(process.cwd(), 'docs', `${doc?.toString()}.mdx`);
  const content = await serialize(await fs.readFile(docPath, 'utf8'));

  return {
    props: {
      doc,
      content,
    },
  };
};

export default Doc;
