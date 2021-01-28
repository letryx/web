import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { Footer } from 'components/footer';
import { TopBar } from 'components/top-bar';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  hideNav?: boolean;
};

export const Layout: FC<LayoutProps> = ({
  children,
  title = 'Letryx',
  hideNav = false,
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <Container px={0} maxWidth="1200px" minHeight="100vh">
        <TopBar hideNav={hideNav} />
        {children}
      </Container>
      <Footer />
    </Container>
  </div>
);
