import { useEffect } from 'react'
import GoalsArticle from './goalsArticle'
import AOS from "aos";
import "aos/dist/aos.css";

function Goals() {
    useEffect(() => {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 3000, // values from 0 to 3000, with step 50ms
        });
      }, []);
   
        
    return (
    <>
        <section id='__goals' className='my-8 md:mt-72 lg:mt-32 lg:mb-32 ' data-aos="fade-in">
            <div className='max-w-4xl m-auto my-10'>
            <h1 >So... how does it actually work?</h1>
            <p className='py-6'>
            On our journey, I will teach you different exercises and techniques so you can create the life you deserve. Below are only some of them.
            </p>
            </div>
            <GoalsArticle />
            <div className='__cirkelBox-cirkel-lineprogress'></div>
        </section>
    </>
)
    }

export default Goals