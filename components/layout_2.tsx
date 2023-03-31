import {ReactNode} from 'react'
import Footer from './footer'
import Navbar from './navbar'
const layout_color = {
     header_backgroundColor: 'bg__color-black',
     logo: '/logo_2.svg',
     btnColor: 'bg__color-black',
    arrowColor: 'cta__bg-light',
     btnText:'color_s'
}
function Layout_2({children,}:{
    children: React.ReactNode,
}) {
     const {header_backgroundColor, logo, arrowColor, btnColor, btnText} = layout_color
  return (
        <>
        <Navbar borderColor={btnText} btnText={btnText} Header__bg={header_backgroundColor}  btncolor={btnColor} arrowColor={arrowColor} logo={logo} />
        <main className=''>
            {children}
        </main>
        <Footer/>
        </>
  )
}

export default Layout_2