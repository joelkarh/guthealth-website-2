import React from 'react'
import Button from './button'
import TestimonialCard from './testimonialcard'

const data = {
    id:0,
    title:'Join hundreds of happy people',
    buttonText:"Let's call",
    people: [
        {
            id:0,
            name:'Johanna Jackson',
            job:'Agency Owner',
            img:'/hero_image.jpg',
            text:'Working with Maria was an absolutely life changing. I finally made a good life work balance, took my business of the ground while keeping healthy relationship with my friends and family.'
        },
        {
            id:1,
            name:'Johanna Jackson',
            job:'Agency Owner',
            img:'/hero_image.jpg',
            text:'Working with Maria was an absolutely life changing. I finally made a good life work balance, took my business of the ground while keeping healthy relationship with my friends and family.'
        },  {
            id:2,
            name:'Johanna Jackson',
            job:'Agency Owner',
            img:'/hero_image.jpg',
            text:'Working with Maria was an absolutely life changing. I finally made a good life work balance, took my business of the ground while keeping healthy relationship with my friends and family.'
        },  {
            id:3,
            name:'Johanna Jackson',
            job:'Agency Owner',
            img:'/hero_image.jpg',
            text:'Working with Maria was an absolutely life changing. I finally made a good life work balance, took my business of the ground while keeping healthy relationship with my friends and family.'
        },  {
            id:4,
            name:'Johanna Jackson',
            job:'Agency Owner',
            img:'/hero_image.jpg',
            text:'Working with Maria was an absolutely life changing. I finally made a good life work balance, took my business of the ground while keeping healthy relationship with my friends and family.'
        },  {
            id:5,
            name:'Johanna Jackson',
            job:'Agency Owner',
            img:'/hero_image.jpg',
            text:'Working with Maria was an absolutely life changing. I finally made a good life work balance, took my business of the ground while keeping healthy relationship with my friends and family.'
        }
    
    ]
}

function Testimonials() {
    const reviews = data.people
    const reviewList = data.people.length
  return (
    <>
    <section id='Testimonials' className=''>
        <h1 className='my-20'>{data.title}</h1>
        <Button text={data.buttonText}/>
        <article className=''>
        {reviewList > 0 && reviews.map(({ name, text, img},i)=>(
            <div key={i}>
            <TestimonialCard  name={name} text={text} img={img}/>
            </div>
        ))
        
        }
        </article>
    </section>
    </>
  )
}

export default Testimonials