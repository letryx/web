import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
import { theme } from 'styles/theme';

const UIProvider: FC = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
);

export { UIProvider };
