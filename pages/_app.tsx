import '../styles/globals.scss'
import '../styles/__slick-theme.scss'
import '../styles/__slickscss.scss'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
