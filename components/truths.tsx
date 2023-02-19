import Image from 'next/image'
import React from 'react'
import qoute from "./../public/qoutes.svg"
import sun from "./../public/sun.svg"
import Button from './button'
import style from './../styles/Home.module.scss'

function Truths() {
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
    return ( 
    <div className='relative '> 
    <section id='truth' className='mx-auto xl: z-10 relative'>
        <article className=''>
            <div className='truth_article-img'>
                <Image alt='' width={692} height={919} src='/imagewithfilter.png' /> 
            </div>
        <div className='truth_article'>
        <h3 className=''>{data.title}</h3>
            <p className='truth_article_2'>{data.titleDescription}</p>
            <h4 className=''>{data.subtitle}</h4>
            <div className=''>
                {data
                    .subdata
                    .map(({id, description}) => (
                        <div key={id}>
                            <p className='truth_p'>{description}</p>
                        </div>
                        
                    ))}
            </div>
            <div className='mt-16'>
            <Button text="Contact me"/>
            </div>
        </div>
        </article>
    </section> 
    <section  className='absolute truth-qoute mt-8 lg:mt-0 p-4 '>
            <article className='relative'>
                <Image src={sun} alt="" width={275.5} height={162.5} className='sun hidden lg:block mr-4'/>
                <Image src={qoute} alt='' width={51} height={36} className='my-8 '/>
                <div className='qoute'>
                <p className=''>
                It &apos;s not the road taken but the road not taken that makes all the difference.
                </p>
                <span className='my-6 block'>Mark Twain : The Story of the Fox</span>
                </div>
                
            </article>
        </section>
</div>
)
}

export default Truths