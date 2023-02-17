import Image from 'next/image'
import React from 'react'
import TruthImage from '../public/imagewithfilter.png'
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
    <> 
    <section id='truth' className='relative'>
        <article className=''>
            <div className=''>
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
            <Button/>
            </div>
        </div>
        </article>
    </section> 
</>
)
}

export default Truths