import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { Global } from '@emotion/react';
import fonts from 'styles/font-face';

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Global styles={fonts} />
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
