import Image from 'next/image';
import React from 'react'

const Pillers = (props: { title: string; text: string; qoute: string; author: string; src: string }) => {
    const {title,text, qoute, author, src} = props
  return (
    <>
        <div className="hidden lg:block __Todo-border-animation __Todo-border">
                <Image src={src} alt='' priority width={516} height={516}  style={{
        width:  'auto',
        height: 'auto'
      }}/>
        </div>
        <div className='__Todo_box'>
        <h2 className='py-4'>{title}</h2>
        <p className='my-4'>{text}</p>
        <div className='relative flex justify-center my-2 __Todo_article-qoute'>
            <Image src="/qoutes.svg" alt=""  style={{
        width:  'auto',
        height: 'auto'
      }} width={34} height={24} className='__Todo_article-qoute-qoute'/>
            <Image src="/line.svg"  style={{
        width:  'auto',
        height: 'auto'
      }} alt="" width={331} height={0} className='__Todo_article-qoute-line' />
        </div>
        <blockquote className=''>
            {qoute}
        </blockquote>
        <address className=''>
            {author}
        </address>
        </div>

    
    </>
  )
}

export default Pillers