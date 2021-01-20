import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { Footer } from './footer';
import { TopBar } from './top-bar';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title = 'Letryx',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <Container px={0} maxWidth="1200px" minHeight="65vh">
        <TopBar />
        {children}
      </Container>
      <Footer />
    </Container>
  </div>
);
