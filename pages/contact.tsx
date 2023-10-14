import Image from "next/image"
import Layout from "../components/layout"
import Qa from "../components/qa"
import Form from "../components/form"
import {motion as m} from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";


const data = {
    src: '/in_bed_hair.JPG',
    imgText: `Every journey starts with small decision. For us it will be a short call where we will get to know each other.`,
    imgSignature: `Romy Hugens`,
    formTitle: `Let's have a chat`
}
export default function Contact() {
    const {src, imgText, imgSignature, formTitle} = data

    return (
        <Layout>
            <m.section
                className="container contact"
                initial={{
                opacity: 0
            }}
                animate={{
                opacity: 1
            }}
                exit={{
                opacity: 0
            }}
                transition={{
                duration: .5
            }}>
                <article
                    className="flex flex-col items-center pt-12 overflow-hidden lg:my-10 lg:pl-20 lg:pr-20 lg:flex-row lg:justify-center contact__form ">
                    <div className=" contact__img mb-14 md:mx-auto lg:mr-[5rem]">
                        <Image src={src} alt='' width={545} height={617}/>
                        <div className="img__box">
                            <p className="">{imgText}</p>
                            <span>{imgSignature}</span>
                        </div>
                    </div>
                    <section className="px-4 lg:px-0 form__box">
                        <h1
                            className="text-[1.75rem] leading-[2.3rem
] md:text-[2.75rem] leading-[2.8rem] pb-8">{formTitle}</h1>
                        <Form/>
                    </section>
                </article>
            </m.section>
            <Qa/>
        </Layout>
    )
}
