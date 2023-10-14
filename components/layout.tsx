import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'
const layout_color = {
  header_backgroundColor: 'primary-bg',
  logo: '/logo_3.svg',
  btnColor: 'cta__bg-dark',
  arrowColor: 'cta__bg-light',
  btnText: 'color_s',
  borderColor: 'color_p'

}
function Layout({ children, }: {
  children: React.ReactNode,
}) {
  const { header_backgroundColor, logo, arrowColor, btnColor, btnText, borderColor } = layout_color
  return (
    <>
      <Navbar borderColor={borderColor} btnText={btnText} Header__bg={header_backgroundColor} arrowColor={arrowColor} logo={logo} btncolor={btnColor} />
      <main className=''>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout