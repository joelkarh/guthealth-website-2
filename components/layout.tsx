import {ReactNode} from 'react'
import Footer from './footer'
import Navbar from './navbar'

function Layout({children,}:{
    children: React.ReactNode,
  }) {
  return (
        <>
        <header>
        <Navbar/>
        </header>
        <main className=''>
            {children}
        </main>
        <Footer/>
        </>

  )
}

export default Layout