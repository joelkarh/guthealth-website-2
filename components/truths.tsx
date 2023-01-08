import Image from 'next/image'
import React from 'react'
import TruthImage from '../public/truthImage.png'
import Button from './button'

function Truths() {
    const data ={
        id:1,
        title:'You are the flower that\'s waiting to flourish. I\'m here to help you get on the right track.',
        titleDescription:'Vivamus laoreet. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue.',
        subtitle:'My TRUTHS',
        subdata:[
            {
                id:1,
                description:'My coaching is tailored to you so you can grow'
            },
            {
                id:2,
                description:'Your journey is my journey'
            },
            {
                id:3,
                description:'I let you grow and heal in your own pace'
            },
            {
                id:4,
                description:'It\'s not where you going, i\'s how you getting there'
            },
        ]
    }
    return ( 
    <> 
    <section id='truth' className='xl:flex justify-between my-16'>
        <div className='__truth-image-wrapper'>
        <Image src={TruthImage} width={500}
        height={500} className=' __truth-image ' alt='' />
        </div>
        <article className='max-w-xl'>
            <h3 className='my-4'>{data.title}</h3>
            <p className='mt-4 '>{data.titleDescription}</p>
            <h4  className='uppercase my-6 xl:mt-6'>{data.subtitle}</h4>
        <div className='__truth-box '>
            {data.subdata.map(({id,description})=>(
                <div key={id}>
                <p>{description}</p>
                <hr className='my-4'/>
                </div>
            ))}
            
        </div>
        <Button/>
        </article>
    </section>
    </>
)
}

export default Truths