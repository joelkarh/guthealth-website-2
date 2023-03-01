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
    <div className='flex justify-between xl:pr-5 xl:pl-5 overflow-hidden'>
      <Link href="/" className='pointer flex'>
        <img src={'/RH-min.svg'} className={`${styles.Brand} `} alt=''/>
      </Link>
        <img onClick={showMenu} src={'/navbar.svg'} className={`${styles.Menu} ${menu? '':'bg-color-beige'} xl:hidden`} alt=''/>
        <nav className={`hidden navigation xl:flex`}>
          <ul className='flex'>
            <li>
              <Link href={`/`}>About me</Link>
            </li>
            <li>
              <Link href={`/`}>How does it works ?</Link>
            </li>
            <li>
              <Link href={`/`}>Contact</Link>
            </li>
            <span className='line hidden xl:block'/>
            <li className='arrow pointer'>
              {/* <Link href={`/`}>Book a call</Link> */}
              <Link href={`/`} className=''>
              <div className='arrow-cta'>
                <Button text="Book a call" /> 
              </div>
              </Link>
            </li>
          </ul>
        </nav>
    </div>

    <hr className='w-full border-solid border-1 border-black'/>
    <div className='relative lg:hidden'>
    <nav className={`${menu ? `hidden` : 'navigation-mobile-on '}   xl:flex h-auto px-2 py-8`}>
          <ul className='flex flex-col  '>
            <li className='my-2 p-4'>
              <Link href={`/`}>About me</Link>
            </li>
            <li className='my-2 p-4'>
              <Link href={`/`}>How does it works ?</Link>
            </li>
            <li className='my-2 p-4'>
              <Link href={`/`}>Contact</Link>
            </li>
            <span className='line hidden xl:block'/>
            <Button text="let's call"/>
          </ul>
        </nav>
    </div>
    {/* mobile -navbar */}

    </>
    
  )
}

export default Navbar

