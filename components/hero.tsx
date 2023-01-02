import Image from 'next/image'
// @ts-ignore
import hero_image from '../public/hero_image.JPG'
import Button from './button'

function Hero() {
    return ( <> 
    <section id='hero' className='flex flex-col xl:flex-row'>
        <div className='__name-box hidden xl:block xl:absolute'>
            <span className='__name'>
                I&apos;m Romy Hugens
            </span>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Vector-arrow.svg" alt=""/>
        </div>
        <article className='my-14 mx-auto xl:mx-0'>
            <h1 className='font-semibold text-4xl	'>Transform your life and unleash your potential.</h1>
            <p className='text-lg	font-normal	leading-7	my-8'>I&apos;ve helped thousands to
                create more stable and sustainable life though my life coaching.
            </p>
            <Button/>
        </article>
        <div className='__image relative xl:my-14 mx-auto xl:mx-0'>
            <Image src={hero_image} className='__image-img object-contain' alt=''/>
        </div>
    </section> 
    </>
    )
}

export default Hero