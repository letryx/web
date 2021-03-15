import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  BreadcrumbLink,
  BreadcrumbLinkProps,
} from '@chakra-ui/react';

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, 'as'>
>;

export type NextBreadcrumbLinkProps = PropsWithChildren<
  NextLinkProps & Omit<BreadcrumbLinkProps, 'as'>
>;

//  Has to be a new component because both chakra and next share the `as` keyword
export const NextChakraLink: FC<NextChakraLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}) => (
  <NextLink
    passHref
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={prefetch}
  >
    <ChakraLink {...chakraProps}>{children}</ChakraLink>
  </NextLink>
);

export const NextBreadcrumbLink: FC<NextBreadcrumbLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}) => (
  <NextLink
    passHref
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={prefetch}
  >
    <BreadcrumbLink {...chakraProps}>{children}</BreadcrumbLink>
  </NextLink>
);
