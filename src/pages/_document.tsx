import { ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import globalStyles from 'styles/global-styles';

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Global styles={globalStyles} />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
