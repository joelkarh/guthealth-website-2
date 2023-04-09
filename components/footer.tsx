import Link from 'next/link'
import React from 'react'

function Footer() {
     return (
       <>
     <section className='container p-2 pt-16 mx-auto footer'>
                    <section className="flex flex-col footer__socials lg:flex-row lg:justify-between" data-aos="fade-in">
                          {/*  eslint-disable-next-line @next/next/no-img-element */}
                 <img src="/logo_3.svg" alt="" className='m-2 mx-auto lg:mx-0' />
                 <div className="flex justify-center m-6 socials__box ">
                     {/*  eslint-disable-next-line @next/next/no-img-element */}
                     <Link href={'https://www.linkedin.com/in/romy-hugens-310086155/?originalSubdomain=be'}><img src="/linkedin.svg" alt="" className='mx-2' /></Link> 
                              <Link target='_blank' href={'https://www.instagram.com/romyhugens'}>
                                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                                   <img src="/instagram.svg" alt="" /></Link> 
                 </div>
            </section>
            <section className="flex flex-col py-4 footer__quote lg:flex-row lg:justify-between lg:my-4" >
                 <h1 data-aos="fade-in" className='text-center lg:text-left'>Hey, I&apos;m Romy hugens and I offer life coaching of the future with personalized plan to achieve innner balance.</h1>
                 <ul data-aos="fade-in" className='flex gap-4 py-4 mx-auto my-2 font-bold lg:mx-0 lg:justify-between'>
                      <li><Link  href='/'>Home</Link></li>
                      <li><Link href='/about'>About</Link></li>
                      <li><Link  href='/services'>Services</Link></li>
                              <li><Link href='/contact'>Contact</Link></li>
                              <li><Link  href='/'>Login</Link></li>
                 </ul>
            </section>
               </section>
               <section className="text-center footer__banner ">
                 <p>This website is developed with ❤️  <span> <Link href="https://karhamba.be/">by Karhamba</Link></span></p>
            </section>
     </>
  )
}

export default Footer