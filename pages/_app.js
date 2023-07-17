import '../styles/style.css'
import Head from 'next/head'
import BaseLayout from "./components/base_layout";

export default function App({ Component, pageProps }) {

  return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
  )
}
