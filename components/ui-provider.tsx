import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode, FunctionComponent } from 'react';

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

const UIProvider: FunctionComponent<ChakraProps> = ({ children, cookies }) => (
  <ChakraProvider
    colorModeManager={
      cookies ? cookieStorageManager(cookies) : localStorageManager
    }
  >
    {children}
  </ChakraProvider>
);

type ServerSideProps<T> = { props: T } | Promise<{ props: T }>;

function getServerSideProps({
  req,
}: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}

export { UIProvider, getServerSideProps };
