import Link from 'next/link'
import React from 'react'

function Footer() {
     return (
       <>
     <section className='footer container mx-auto p-2 pt-16'>
                    <section className="footer__socials flex flex-col lg:flex-row lg:justify-between" data-aos="fade-in">
                          {/*  eslint-disable-next-line @next/next/no-img-element */}
                 <img src="/logo_3.svg" alt="" className='mx-auto lg:mx-0 m-2' />
                 <div className="socials__box flex justify-center m-6 ">
                     {/*  eslint-disable-next-line @next/next/no-img-element */}
                     <Link href={'/'}><img src="/twitter.svg" alt="" className='mx-2' /></Link> 
                              <Link target='_blank' href={'https://www.instagram.com/romyhugens'}>
                                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                                   <img src="/instagram.svg" alt="" /></Link> 
                 </div>
            </section>
            <section className="footer__quote  flex flex-col lg:flex-row lg:justify-between py-4 lg:my-4" >
                 <h1 data-aos="fade-in" className='text-center lg:text-left'>Hey, I&apos;m Romy hugens and I offer life coaching of the future with personalized plan to achieve innner balance.</h1>
                 <ul data-aos="fade-in" className='py-4 mx-auto lg:mx-0 lg:justify-between flex gap-4 my-2 font-bold'>
                      <li><Link  href='/'>Home</Link></li>
                      <li><Link href='/'>About</Link></li>
                      <li><Link  href='/'>Contact</Link></li>
                 </ul>
            </section>
               </section>
               <section className="footer__banner text-center ">
                 <p>This website is developed with ❤️  <span> <Link href="https://karhamba.be/">by Karhamba</Link></span></p>
            </section>
     </>
  )
}

export default Footer