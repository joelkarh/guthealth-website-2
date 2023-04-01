import Image from 'next/image'
import React from 'react'

type text = {
    title: string,
    description: string,
    src: string
}

function More({title, description, src} : text) {
    return (
        <article  className='flex items-start mb-8'>
            <Image src={src} alt='' width={44} height={44}  className=''/>
            <div className='pl-4'>
                <h4 className="font-['Baskerville'] text-xl sm:text-[22px] font-semibold mb-4 leading-6">{title}</h4>
                <p className='text-base font-normal sm:text-[18px] leading-[26.5px] '>{description}</p>
            </div>
        </article>
    )
}

export default More