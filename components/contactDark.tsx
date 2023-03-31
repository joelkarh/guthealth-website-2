import Image from 'next/image'
import Button from './button'

export default function ContactDark(props : {
    title: string,
    description: string,
    buttonText: string,
    img: string,
    btnColor: string,
    bg__color_arrow: string
}) {
    const {
        title,
        description,
        buttonText,
        img,
        btnColor,
        bg__color_arrow
    } = props
    return (
        <section
            className=' mx-4  contactDark  md:my-auto md:container bg-[#333] text-[#efeee8]'
            data-aos="fade-in">
            <article className='p-12 md:flex md:justify-around '>
                <Image
                    className='mx-auto sun'
                    src={img}
                    alt=''
                    width={277.95}
                    height={277}
                    style={{
                    width: 'auto',
                    height: 'auto'
                }}/>
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
