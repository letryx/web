import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { FC } from 'react';
import myTheme from 'styles/theme';

const theme = extendTheme(myTheme);

const UIProvider: FC = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
);

export { UIProvider };
