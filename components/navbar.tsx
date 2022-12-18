/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.scss'

function Navbar() {
  return (
    <>
    <div className='container flex justify-between pr-5 pl-5'>
        <img src={'/RH-min.svg'} className={`${styles.Brand}  `} alt=''/>
        <img src={'/navbar.svg'} className={`${styles.Menu} `}alt=''/>
        {/* <div>
    // nav
    </div> */}
    </div>
    <hr className='w-full border-solid border-1 border-black'/>
    </>
    
  )
}

export default Navbar