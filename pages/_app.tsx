import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';

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

export default function App({
  Component,
  pageProps,
}: AppRenderProps): JSX.Element {
  return <Component {...pageProps} />;
}
