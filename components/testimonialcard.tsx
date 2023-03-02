import React from 'react'
import Image from 'next/image'
import stars from './../public/starsun.svg'

const TestimonialCard = (props : {
    name: string,
    text: string,
    img: string
}) => {
    const { name, text, img} = props

    return ( 
    <> 
      <div className='__Testimonial_card '>
        <div className='__Testimonial_card-box flex items-center justify-between py-4'>
          <div className='__Testimonial_card-img '>
          <Image className='' src={img} alt='' height={22} width={132}/>
          </div>
            <address className=''>{name} </address>
    </div> 
    <span className=''></span>
    <Image className='p-2' src={stars} alt='' height={22} width={132}/>
    <p className='p-2'>
          {text}
          </p>
        </div> 
        </>
    
  )
}

export default TestimonialCard