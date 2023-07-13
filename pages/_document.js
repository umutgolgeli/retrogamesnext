import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>Retro Games</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/foto.jpeg"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/foto.jpeg"/>
          <link rel="stylesheet" href="style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
