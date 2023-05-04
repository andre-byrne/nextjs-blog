import '../styles/globals.css';
import { dangerouslyInitI18next } from '../lib/i18n'

dangerouslyInitI18next()

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}