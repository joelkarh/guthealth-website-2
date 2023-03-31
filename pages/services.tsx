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
            <section className="services">
                <article
                    className="lg:grid h-screen services__hero lg:place-content-center bg-[#3E3F3E] text-center pt-14 ">
                    <h1 className='text-[2.5rem] lg:text-[5rem] text-[#EFEEE8]'>{title}</h1>
                    <h2 className='pt-4 text-lg lg:text-2xl text-[#EFEEE8]'>{subtitle}</h2>
                </article>
                <section className='max-w-[1351px] min-h-[577px] lg:min-h-[661px] flex items-center flex-col lg:flex-row'>
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
        </Layout_2>
    )
}
