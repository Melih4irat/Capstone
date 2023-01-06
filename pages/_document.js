import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";
import {resetServerContext} from "react-beautiful-dnd";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          enhanceComponent: Component => Component,
        });

      const initialProps = await Document.getInitialProps(ctx);
      resetServerContext();
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="./../img/project.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
