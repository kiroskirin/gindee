import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    padding: 0;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    background-color: #fff;
    color: #333;
    font-style: normal;
  }
`;

export default class MyCustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }; // return styles collected
  }

  render() {
    return (
      <html>
        <Head>
          <title>NextJS with Styled Components</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, user-scalable=no, minimal-ui"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
