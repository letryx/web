import { FC, ReactNode } from 'react';
import Head from 'next/head';
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Footer } from 'components/footer';
import { TopBar } from 'components/top-bar';

interface IBreadcrumb {
  title: string;
  href: string;
}

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  breadcrumbs?: IBreadcrumb[];
  hideNav?: boolean;
};

export const Layout: FC<LayoutProps> = ({
  children,
  title = 'Letryx',
  breadcrumbs = [],
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
        <Breadcrumb
          hidden={title === 'Letryx'}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          {breadcrumbs.map(({ title: crumbTitle, href }) => (
            <BreadcrumbItem>
              <BreadcrumbLink href={href}>{crumbTitle}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        {children}
      </Container>
      <Footer />
    </Container>
  </div>
);
