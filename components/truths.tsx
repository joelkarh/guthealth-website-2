import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'
import qoute from "./../public/qoutes.svg"
import sun from "./../public/sun.svg"
import Button from './button'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AOS from "aos";
import "aos/dist/aos.css";



function Truths() {
    const sunRef = useRef<HTMLDivElement>(null);
    //gsap
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let ctx = gsap.context(() => {
            gsap.from(sunRef.current, {
                scrollTrigger: {
                    trigger: sunRef.current,
                    start: "20px 80%",
                    end: "bottom 100px",
                    markers: true,
                    scrub: true,
                    toggleActions: "restart pause reverse pause"
                },
                rotation: 360,
                duration: 7
            })
        }, sunRef)
        return () => ctx.revert()
    }, [])

    const data = {
        id: 1,
        title: 'You are the flower that\'s waiting to flourish. I\'m here to help you get on the' +
            ' right track.',
        titleDescription: 'Vivamus laoreet. In dui magna, posuere eget, vestibulum et, tempor auctor, justo' +
            '. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend ' +
            'augue.',
        subtitle: 'My TRUTHS',
        subdata: [
            {
                id: 1,
                description: 'My coaching is tailored to you so you can grow'
            }, {
                id: 2,
                description: 'Your journey is my journey'
            }, {
                id: 3,
                description: 'I let you grow and heal in your own pace'
            }, {
                id: 4,
                description: 'It\'s not where you going, i\'s how you getting there'
            }
        ]
    }
    useEffect(() => {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 2000, // values from 0 to 3000, with step 50ms
            startEvent: 'DOMContentLoaded',
            once: true,
        });
    }, []);
    return (
        <div className='relative '>
            <section id='truth' className='relative z-10 mx-auto '>
                <article className='lg:container'>
                    <div className='truth_article-img' data-aos="fade-in">
                        <Image alt='' width={692} height={919} src='/imagewithfilter.png' />
                    </div>
                    <div className='truth_article' data-aos="fade-up">
                        <h3 className=''>{data.title}</h3>
                        <p className='truth_article_2'>{data.titleDescription}</p>
                        <h4 className=''>{data.subtitle}</h4>
                        <div className=''>
                            {data
                                .subdata
                                .map(({ id, description }) => (
                                    <div key={id}>
                                        <p className='truth_p'>{description}</p>
                                    </div>
                                ))}
                        </div>
                        <div className='mt-16'>
                            <Button btnText='' bg__color_arrow='cta__bg-light' btnColor='btn__color-black' text="Contact me" />
                        </div>
                    </div>
                </article>
            </section>
            {/* abolute is gone */}
            <section className='p-4 mt-8 truth-qoute lg:mt-0'>
                <article className='relative' data-aos="fade-in">
                    <div ref={sunRef} className='hidden sun lg:block'>

                        {/* <Image src={sun} alt="" width={275.5} height={162.5}  className='hidden mr-4 lg:block'/> */}
                    </div>

                    <Image src={qoute} alt='' width={51} height={36} className='my-8 ' />
                    <div className='qoute'>
                        <p className=''>
                            It &apos;s not the road taken but the road not taken that makes all the difference.
                        </p>
                        <span className='block my-6'>Mark Twain : The Story of the Fox</span>
                    </div>

                </article>
            </section>
        </div>
    )
}

export default Truths