import Head from 'next/head'
import {useEffect} from 'react'
import ContactDark from '../components/contactDark'
import Layout from '../components/layout'
import {motion as m } from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";
const data = {
     title: `Hey there!
     I'm Romy Hugens.` ,
     subtext: `As a Certified Gut Health coach specializing in Health Optimization through Gut Health and the Abundance Mindset, I believe that with a healed gut, healing your mind and soul is inevitable. `,
     contactCardTitle: 'Create the life \n you deserve',
     contactCardText:'Nullam dictum felis eu pede mollis pretium. Duis lobortis massa imperdiet quam. ',
     imgSrc: '/sunDark.svg',
     buttonText: "Let's call",
     btnColor: 'btn__color-beige',
     bg__color_arrow:'cta__bg-dark'
}
const { title, subtext, contactCardText, contactCardTitle, imgSrc, buttonText, btnColor, bg__color_arrow } = data
const About = ()=> {
     useEffect(() => {
          AOS.init({
              delay: 200, // values from 0 to 3000, with step 50ms
              duration: 3000, // values from 0 to 3000, with step 50ms
          });
        }, []);
  return (
     <Layout>
          <Head>
          <title className='text-[#333]'>About me - Romy Hugens</title>
            </Head>
            <m.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
          <section className='my-6 lg:my-24 about' >
                 <article  className='container px-4 pt-20 mx-auto lg:text-center min-w-xs about__article'>
                      <h1 data-aos="fade-up" className='pb-4 lg:pb-6 text-4xl lg:mx-auto font-semibold lg:text-[4.9rem] lg:leading-[5.25rem] max-w-[47.25rem] opacity-75 whitespace-pre-line'>{title}</h1>
                      <p data-aos="fade-up" className='text-lg lg:mx-auto lg:text-[1.5rem] max-w-[41.25rem] lg:leading-[2.5rem] '>{subtext}</p>
                 </article>
            </section>
            <section className="py-4 lg:py-10 about__image lg:flex lg:justify-center lg:gap-14">
                 <article className='about__image-1 'data-aos="fade-up">
                 </article>
                 <article className='py-4 about__image-2' data-aos="fade-up" >
                 </article>
            </section>
                 <ContactDark bg__color_arrow={bg__color_arrow} title={contactCardTitle} description={contactCardText} img={imgSrc} buttonText={buttonText} btnColor={btnColor} />
                 </m.div>
    </Layout>
  )
}

export default About