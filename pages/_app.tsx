import { AppProps } from 'next/app';
import { FC } from 'react';
import { UIProvider } from 'components/ui-provider';
import { AppProvider } from 'components/app-provider';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <UIProvider>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </UIProvider>
);

export default App;
