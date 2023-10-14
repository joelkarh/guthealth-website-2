import { useEffect } from 'react'
import GoalsArticle from './goalsArticle'
import AOS from "aos";
import "aos/dist/aos.css";
type goalsArticle = {
    goalsTitle: String,
    goalsSubtitle: String
}


function Goals({ goalsTitle, goalsSubtitle }: goalsArticle) {
    useEffect(() => {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 3000, // values from 0 to 3000, with step 50ms
            startEvent: 'DOMContentLoaded',
            once: true,
        });
    }, []);


    return (
        <>
            <section id='__goals' className='' data-aos="fade-in">
                <div className=''>
                    <h1>{goalsTitle} </h1>
                    {/* <p className='py-6'>{goalsSubtitle}
                    </p> */}
                </div>
                <GoalsArticle />
            </section>
        </>
    )
}

export default Goals