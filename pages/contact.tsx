import Image from "next/image"
import Layout from "../components/layout"
import Qa from "../components/qa"
import Button from "../components/button"
const data = {
    src: '/hero.jpeg',
    imgText: `Every journey starts with small decision. For us it will be a short call where we will get to know each other.`,
    imgSignature: `Romy Hugens`,
    formTitle: `Let's have a chat`
}

export default function Contact() {
    const {src, imgText, imgSignature, formTitle} = data
    return (
        <Layout>
            <section className="container contact">
                <article
                    className="flex flex-col pt-12 overflow-hidden lg:my-10 lg:pl-20 lg:pr-20 lg:flex-row lg:justify-center contact__form ">
                    <div className=" contact__img mb-14 md:mx-auto lg:mr-[5rem]">
                        <Image src={src} alt='' width={545} height={617}/>
                        <div className="img__box">
                            <p className="">{imgText}</p>
                            <span>{imgSignature}</span>
                        </div>
                    </div>
                    <section className="px-4 md:py-16 lg:px-0 form__box">
                        <h1
                            className="text-[1.75rem] leading-[2.3rem
] md:text-[2.75rem] leading-[2.8rem] pb-8">{formTitle}</h1>
                        <form className="flex flex-col form ">
                            <input type="text" placeholder="Your name" className=""/>

                            <input type="text" placeholder="Email" className=""/>

                            <input type="text" placeholder="Phone number (optional)" className=""/>

                            <input
                                type="text"
                                placeholder="Prefered time of call back"
                                className=""/>

                                  <input type="text" placeholder="Your message" className="" />
                                  <span className="mb-6"></span>
                                  <Button  btnText="btn__text-white " text="Send form" btnColor="btn__contact-dark" bg__color_arrow="bg__arrow-white" />
                        </form>
                    </section>

                </article>
            </section>
            <Qa/>
        </Layout>
    )
}
