/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Button from './button'
import { IconContext } from "react-icons";
import { CgArrowLongRight } from "react-icons/cg";


function Navbar(props: { Header__bg: string, btncolor: string, arrowColor: string, logo: string, btnText: string, borderColor: string }) {
  //menu navigation
  const [menu, setMenu] = useState(true)
  //menu showing or not showing
  const showMenu = () => {
    setMenu(!menu)
    console.log(menu);
  }
  const { Header__bg, btncolor, arrowColor, logo, btnText, borderColor } = props

  return (
    <header className={Header__bg}>
      <div className='container flex justify-between overflow-hidden lg:pr-5 lg:pl-5 '>
        <Link href="/" className='flex items-center pl-4 pointer'>
          <span className="logo-Name">
            Romy Hugens
          </span>
        </Link>
        <img onClick={showMenu} src={'/navbar.svg'} className={`${styles.Menu} ${menu ? '' : 'bg-color-beige'} lg:hidden`} alt='' />
        <nav className={`hidden navigation lg:flex `}>
          <ul className='flex gap-5'>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/about`}>Over mij</Link>
            </li>
            <li>
              <Link href={`/services`}>Diensten</Link>
            </li>
            <li>
              <Link href={`/contact`}>Contact</Link>
            </li>
          </ul>
          <div className='flex items-center justify-center ml-4 lg:py-5'>
            <Button btnText={btnText} bg__color_arrow={arrowColor} btnColor={btncolor} text="Book a call" />
          </div>
        </nav>
      </div>
      <hr className={`'w-full ${borderColor} border-solid '`} />
      <div className='relative lg:hidden'>
        <nav className={`${menu ? `hidden` : 'navigation-mobile-on '}   lg:flex h-auto px-2 py-8`}>
          <ul className='flex flex-col justify-center'>
            <li className='flex justify-center p-4 my-2'>
              <Link href={`/`}>Home</Link>
            </li>
            <li className='flex justify-center p-4 my-2'>
              <Link href={`/about`}>About</Link>
            </li>
            <li className='flex justify-center p-4 my-2'>
              <Link href={`/services`}>Services</Link>
            </li>
            <li className='flex justify-center p-4 my-2'>
              <Link href={`/contact`}>Contact</Link>
            </li>
          </ul>
          <div className='flex justify-center'>
            <Button btnText={btnText} bg__color_arrow={arrowColor} btnColor={btncolor} text="let's call" />
          </div>

        </nav>
      </div>
      {/* mobile -navbar */}
    </header>

  )
}

export default Navbar

