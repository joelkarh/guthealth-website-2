import {ReactNode} from 'react'
import Navbar from './navbar'

function Layout({children,}:{
    children: React.ReactNode,
  }) {
  return (
        <>
        <header>
        <Navbar/>
        </header>
        <main>
            {children}
        </main>
        {/* {Footer} */}
        </>

  )
}

export default Layout