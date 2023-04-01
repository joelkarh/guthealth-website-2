import React from 'react'
import ButtonServices from '../components/buttonServices'
import Layout_2 from '../components/layout_2'
import More from '../components/more'
import PricingCard from '../components/pricingCard'
import Qa from '../components/qa'
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
    ],
    secondTitle: 'Not only coaching',
    description: `Vivamus laoreet. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue.`,
    secondCategory: [
        {
            title: 'Bespoke approach',
            description: 'Vivamus quis mi. Etiam ut purus mattis mauris sodales aliquam.',
            img: '/services_more/heartbeat.svg'
        }, {
            title: 'Weekly calls',
            description: 'Vivamus quis mi. Etiam ut purus mattis mauris sodales aliquam.',
            img: '/services_more/calls.svg'
        }, {
            title: 'Community',
            description: 'Vivamus quis mi. Etiam ut purus mattis mauris sodales aliquam.',
            img: '/services_more/community.svg'
        }, {
            title: 'Clear goals',
            description: 'Vivamus quis mi. Etiam ut purus mattis mauris sodales aliquam.',
            img: '/services_more/goals.svg'
        }
    ]
}
export default function Services() {
    const {
        title,
        subtitle,
        categories,
        secondTitle,
        description,
        secondCategory
    } = data
    return (
        <Layout_2>
            <section className="relative services">
                <article className="services__hero bg-[#333] flex justify-center ">
                    <div className=' text-center pt-[132px] pb-[342px] ' data-aos="fade-in">
                        <h1 className='text-[2.5rem] sm:text-[5rem] text-[#EFEEE8]'>{title}</h1>
                        <h2 className='pt-4 text-lg sm:text-2xl  mx-auto text-[#EFEEE8]'>{subtitle}</h2>
                    </div>
                </article>
                <section className='container mx-auto m-[-200px] '>
                    <section className='flex flex-col items-center gap-6 sm:gap-8 lg:flex-row' data-aos="fade-up">
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
            <section className='pt-[20rem]' data-aos="fade-up">
                <section
                    className='container flex flex-col items-center px-2 py-20 mx-auto xl:items-start xl:flex-row'>
                    <div className='max-w-xl '>
                        <h3
                            className=" font-['Baskerville'] font-bold text-2xl sm:text-[40px] leading-8 text-[#333]">{secondTitle}</h3>
                        <p className='py-6'>{description}</p>
                    </div>
                    <section className=' py-11 second__category'>
                        {secondCategory.map(({
                            title,
                            description,
                            img
                        }, i) => (<More key={i} title={title} src={img} description={description}/>))
}
                    </section>
                </section>
            </section>
            <section>
                <Qa/>
            </section>
        </Layout_2>
    )
}
