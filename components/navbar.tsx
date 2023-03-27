/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Button from './button'
import { IconContext } from "react-icons";
import {CgArrowLongRight} from "react-icons/cg";


function Navbar() {
  //menu navigation
  const [menu , setMenu] = useState(true)
  //menu showing or not showing
  const showMenu = () => {
    setMenu(!menu)
    console.log(menu);
  }


  return (
    <>
    <div className='container flex justify-between overflow-hidden lg:pr-5 lg:pl-5'>
      <Link href="/" className='flex m-1 pointer'>
        <img src={'/logo_3.svg'} className={`${styles.Brand} `} alt=''/>
      </Link>
        <img onClick={showMenu} src={'/navbar.svg'} className={`${styles.Menu} ${menu? '':'bg-color-beige'} lg:hidden`} alt=''/>
        <nav className={`hidden navigation lg:flex`}>
          <ul className='flex gap-5'>
            <li>
            <Link href={`/`}>Home</Link>
            </li>
            <li>
            <Link href={`/about`}>About</Link>
            </li>
            <li>
            <Link href={`/`}>Services</Link>
            </li>
            <li>
              <Link href={`/`}>Contact</Link>
            </li>
          </ul>
          <div className='flex items-center justify-center ml-4'>
          <Button bg__color_arrow='cta__bg-light' btnColor='btn__color-black' text="Book a call" /> 
          </div>
          
        </nav>
    </div>

    <hr className='w-full border-black border-solid border-1'/>
    <div className='relative lg:hidden'>
    <nav className={`${menu ? `hidden` : 'navigation-mobile-on '}   lg:flex h-auto px-2 py-8`}>
          <ul className='flex flex-col '>
            <li className='p-4 my-2'>
              <Link href={`/`}>Home</Link>
            </li>
            <li className='p-4 my-2'>
            <Link href={`/about`}>About</Link>
            </li>
            <li>
            <Link href={`/`}>Services</Link>
            </li>
            <li className='p-4 my-2'>
              <Link href={`/`}>Contact</Link>
            </li>
          </ul>
          <Button bg__color_arrow='cta__bg-light' btnColor='btn__color-black' text="let's call"/>
        </nav>
    </div>
    {/* mobile -navbar */}

    </>
    
  )
}

export default Navbar

