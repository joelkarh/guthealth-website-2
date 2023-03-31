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
    <section id='hero' className='container flex flex-col px-4 lg:px-0 xl:flex-row xl:pt-4'>
        <div className='hidden __name-box xl:block xl:absolute'data-aos="fade-in" >
            <span className='__name' >
                I&apos;m Romy Hugens
            </span>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Vector-arrow.svg" alt="" />
        </div>
        <article className='mx-auto my-14 xl:mx-0 '  data-aos="fade-up">
            <h1 className='text-4xl font-semibold '>Transform your life and unleash your potential.</h1>
            <p className='my-8 text-lg font-normal leading-7'>I&apos;ve helped thousands to
                create more stable and sustainable life though my life coaching.
            </p>
            <Button btnText='' bg__color_arrow='cta__bg-light' btnColor='btn__color-black' text="Let's call"/>
        </article>
        <div className='relative mx-auto __image xl:my-14 xl:mx-0' data-aos="fade-in">
            
        </div>
    </section> 
    </>
    )
}

export default Hero