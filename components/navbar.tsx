/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.scss'

function Navbar() {
  return (
    <>
    <div className='container flex justify-between'>
        <img src={'/RH-min.svg'} className={`${styles.Brand}  `} alt=''/>
        <img src={'/navbar.svg'} className={`${styles.Menu} `}alt=''/>
        {/* <div>
    // nav
    </div> */}
    </div>
    <hr className='border-4 ' />
    
    
    </>
    
  )
}

export default Navbar