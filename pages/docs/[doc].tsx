// pages/index.js

import {
  Container,
  HeadingProps,
  Link,
  LinkProps,
  ListItem,
  ListItemProps,
  ListProps,
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
    <Text fontSize="3xl" my={8}>
      {children}
    </Text>
  ),
  h2: ({ children }: HeadingProps) => (
    <Text fontSize="2xl" my={6}>
      {children}
    </Text>
  ),
  h3: ({ children }: HeadingProps) => (
    <Text fontSize="md" my={4}>
      {children}
    </Text>
  ),
  // use #### for metadata
  h4: ({ children }: HeadingProps) => (
    <Text fontSize="md" my={12}>
      {children}
    </Text>
  ),
  ul: ({ children }: ListProps) => (
    <UnorderedList my={2} pl={4}>
      {children}
    </UnorderedList>
  ),
  li: ({ children }: ListItemProps) => <ListItem>{children}</ListItem>,
  p: ({ children }: TextProps) => <Text my={2}>{children}</Text>,
  a: ({ children, ...props }: LinkProps) => (
    <Link {...props} target="_blank" style={{ textDecoration: 'underline' }}>
      {children}
    </Link>
  ),
  Layout,
};

const Doc: FC<NextPageContext & { content: MDXRemoteSerializeResult }> = ({
  content,
}) => {
  return (
    <Layout>
      <Container maxWidth="800px">
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

interface DocProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { doc } = context.params as DocProps;
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
