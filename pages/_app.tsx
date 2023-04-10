import '../styles/globals.scss'
import '../styles/services.scss'
import '../styles/contact.scss'
import '../styles/__slick-theme.scss'
import '../styles/__slickscss.scss'
import type {AppProps}
from 'next/app'
import {AnimatePresence} from 'framer-motion'

export default function App({Component, pageProps, router} : AppProps) {

    return <AnimatePresence mode='wait'>
        <Component key={router.pathname} {...pageProps}/>
    </AnimatePresence>
}
