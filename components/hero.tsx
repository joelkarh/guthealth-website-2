import Image from 'next/image'
// @ts-ignore
import hero_image from '../public/hero_image.JPG'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Button from './button'



function Hero() {
    useEffect(() => {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 3000, // values from 0 to 3000, with step 50ms
        });
      }, []);
    return ( <> 
    <section id='hero' className=' container px-4 flex flex-col xl:flex-row xl:pt-4'>
        <div className='__name-box hidden xl:block xl:absolute'data-aos="fade-in" >
            <span className='__name'>
                I&apos;m Romy Hugens
            </span>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Vector-arrow.svg" alt="" />
        </div>
        <article className='my-14 mx-auto xl:mx-0 '  data-aos="fade-up">
            <h1 className='font-semibold text-4xl	'>Transform your life and unleash your potential.</h1>
            <p className='text-lg	font-normal	leading-7	my-8'>I&apos;ve helped thousands to
                create more stable and sustainable life though my life coaching.
            </p>
            <Button text="Let's call"/>
        </article>
        <div className='__image relative xl:my-14 mx-auto xl:mx-0' data-aos="fade-in">
            <Image src={hero_image} className='__image-img object-contain' alt=''/>
        </div>
    </section> 
    </>
    )
}

export default Hero