import { AppProvider } from 'components/app-provider';
import { UIProvider } from 'components/ui-provider';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <UIProvider>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </UIProvider>
);

export default App;
