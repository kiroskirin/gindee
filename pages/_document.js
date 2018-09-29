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
      <html lang="en">
        <Head>
          <title>
            Gindee - Random Dishes Helper, Discover New Dishes, What to Eat
          </title>
          <meta
            name="description"
            content="When you have no idea what to eat or where to eat. Its easier to get some help. This application will help you decide by random some dishes that are added by other users. That mean you can explore new dishes and place that other people love to eat."
          />
          <meta
            name="google-site-verification"
            content="S-geyw_hxynJS9X2MgKUnaL1He8LqN8MNktj7anU2nU"
          />
          <meta property="fb:app_id" content="315539595564827" />
          <meta
            property="og:url"
            content="https://kiroskirin.github.io/gindee/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gindee - Random Dishes Helper, Discover New Dishes, What to Eat"
          />
          <meta
            property="og:description"
            content="When you have no idea what to eat or where to eat. Its easier to get some help. This application will help you decide by random some dishes that are added by other users. That mean you can explore new dishes and place that other people love to eat."
          />
          <meta
            property="og:image"
            content="https://kiroskirin.github.io/gindee/static/spin.png"
          />
          <meta
            property="og:video"
            content="https://kiroskirin.github.io/gindee/static/video.mp4"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, user-scalable=no, minimal-ui"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta httpEquiv="Expires" content="30" />
          <link
            rel="stylesheet"
            type="text/css"
            href="static/styles/styles.min.css"
            media="all"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="static/app-icons/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="static/app-icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="static/app-icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="static/app-icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="static/app-icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="static/app-icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="static/app-icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="static/app-icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="static/app-icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/app-icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="static/app-icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/app-icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="static/app-icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/app-icons/favicon-16x16.png"
          />
          <link rel="manifest" href="static/app-icons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="static/app-icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
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
