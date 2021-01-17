import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';
import { FunctionComponent } from 'react';

export interface AppRenderProps {
  pageProps: Record<string, unknown>;
  err?: Error;
  Component: NextComponentType<
    NextPageContext,
    AppRenderProps,
    Record<string, unknown>
  >;
  router: NextRouter;
}

const App: FunctionComponent<AppRenderProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
