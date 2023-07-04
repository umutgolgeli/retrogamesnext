import '../styles/globals.css'
import '../styles/style.css'

export default function App({ Component, pageProps }) {
  console.log("I am the best ever")
  return <Component {...pageProps} />
}
