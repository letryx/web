import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';

const UIProvider: FC = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export { UIProvider };
