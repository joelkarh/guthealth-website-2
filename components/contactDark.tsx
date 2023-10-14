import Image from 'next/image'
import Button from './button'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ContactDark(props : {
    title: string,
    description: string,
    buttonText: string,
    img: string,
    btnColor: string,
    bg__color_arrow: string
})
{
    const {
        title,
        description,
        buttonText,
        img,
        btnColor,
        bg__color_arrow
    } = props

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
                        
                        toggleActions:"restart pause reverse pause"
                    },
                    rotation: 360,
                    duration: 7
                })
            }, sunRef)
            return ()=> ctx.revert()
        },[])
    

    return (
        <section
            className=' mx-4  contactDark  md:my-auto md:container bg-[#333] text-[#efeee8]'
            data-aos="fade-in">
            <article className='p-12 md:flex md:justify-around '>
                <div
                    ref={sunRef}
                    className='mx-auto sunDark'
                    />
                <section className="m-auto contactDark__text">
                    <h1
                        className='text-[1.75rem] leading-[2.27rem]  lg:text-[2.75rem] lg:leading-[2.88rem] font-normal my-4'>{title}</h1>
                    <p
                        className="font-['oxygen'] text-base leading-[1.65rem] lg:text-lg font-normal my-4">{description}</p>
                    <Button
                        btnText={''}
                        bg__color_arrow={bg__color_arrow}
                        text={buttonText}
                        btnColor={btnColor}/>
                </section>
            </article>
        </section>
    )
}
