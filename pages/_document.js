import { Html, Head, Main, NextScript } from 'next/document'

export default function DocumentFun() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/foto.jpeg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
