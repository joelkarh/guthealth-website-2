import React from 'react'
import Layout_2 from '../components/layout_2'
import PricingCard from '../components/pricingCard'
const data = {
    title: 'Services',
    subtitle: 'Adjustabled pricing for your different needs',
    categories: [
        {
            title: 'Simple',
            calls: 'Bi-weekly calls',
            advice: 'Business advice',
            community: 'Access to community',
            dashboard: 'Personal dashboard',
            Btncolor: 'btn__services-transparent',
            btnText: 'btn__text-black',
            bgArrow: 'bg__arrow-black'
        }, {
            title: 'Basic',
            calls: 'Weekly calls',
            advice: 'Yoga and meditation classes',
            community: 'Personalized workshops',
            dashboard: 'Real life meeting',
            Btncolor: 'btn__services-dark',
            btnText: 'btn__text-white',
            bgArrow: 'bg__arrow-white'
        }, {
            title: 'Simple',
            calls: 'Daily calls',
            advice: 'Manifestation classes',
            community: 'Access to extra memebers community',
            dashboard: 'Monthly community meetings',
            Btncolor: 'btn__services-transparent',
            btnText: 'btn__text-black',
            bgArrow: 'bg__arrow-black'
        }
    ]
}
export default function Services() {
    const {title, subtitle, categories} = data
    return (
        <Layout_2>
            <section className="relative services">
                <article className="services__hero bg-[#333] flex justify-center ">
                    <div
                        className=' text-center pt-[132px] pb-[342px]'>
                        <h1 className='text-[2.5rem] sm:text-[5rem] text-[#EFEEE8]'>{title}</h1>
                        <h2 className='pt-4 text-lg sm:text-2xl  mx-auto text-[#EFEEE8]'>{subtitle}</h2>
                    </div>

                </article>
                <section className='container mx-auto m-[-200px] '>
                    <section className='flex flex-col items-center gap-6 sm:gap-8 lg:flex-row'>
                        {categories.length > 0 && categories.map(({
                            title,
                            calls,
                            advice,
                            community,
                            dashboard,
                            Btncolor,
                            btnText,
                            bgArrow
                        }, i) => (<PricingCard
                            key={i}
                            Title={title}
                            Calls={calls}
                            Advice={advice}
                            Community={community}
                            Dashboard={dashboard}
                            BtnColor={Btncolor}
                            btnText={btnText}
                            bgColorArrow={bgArrow}/>))
}
                    </section>
                </section>

            </section>
            <section className='pt-[20rem]'>
                <article className='container px-2 mx-auto text-2xl '> 
                    <h3 className="font-['Baskerville']">Coaching and much more</h3>
                </article>
            </section>
        </Layout_2>
    )
}
