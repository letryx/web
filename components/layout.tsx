import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, Container } from '@chakra-ui/react';
import { Footer } from 'components/footer';
import { NextBreadcrumbLink } from 'components/next-chakra-link';
import { TopBar } from 'components/top-bar';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

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
}) => {
  // const { asPath } = useRouter();
  // breadcrumbs.push({ title, href: asPath });
  return (
    <div>
      <Head>
        <title>{title === 'Letryx' ? title : `${title} | Letryx`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth="1200px" overflow="hidden">
        <Box px={0} maxWidth="1200px" minHeight="75vh">
          <TopBar hideNav={hideNav} />
          <Breadcrumb
            // fontWeight="semibold"
            // fontSize="1.2rem"
            hidden={title === 'Letryx'}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            {breadcrumbs.map(({ title: crumbTitle, href }) => (
              <BreadcrumbItem key={title}>
                <NextBreadcrumbLink pb={0} href={href}>
                  {crumbTitle}
                </NextBreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Box pt={4}>{children}</Box>
        </Box>
        <Footer />
      </Container>
    </div>
  );
};
