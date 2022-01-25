import { extendTheme, ThemeConfig } from '@chakra-ui/react';

export const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'system',
};

export const theme = extendTheme(
  {
    fonts: {
      contract: 'Lora, serif',
    },
  },
  { config }
);
