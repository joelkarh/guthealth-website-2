/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

function Navbar() {
  return (
    <>
    <div className='flex justify-between pr-5 pl-5 overflow-hidden'>
      <Link href="/" className='pointer'>
        <img src={'/RH-min.svg'} className={`${styles.Brand} `} alt=''/>
      </Link>
        <img src={'/navbar.svg'} className={`${styles.Menu} xl:hidden`} alt=''/>
        <nav className='hidden navigation xl:flex'>
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
              <Link href={`/`}>Book a call</Link>
              <Link href={`/`} className=''>
              <div className='arrow-cta'>
                <span className='__arrowUp'></span>
                <span className='__arrowMiddle'></span>
                <span className='__arrowDown'></span>
              </div>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
    <hr className='w-full border-solid border-1 border-black'/>
    </>
    
  )
}

export default Navbar