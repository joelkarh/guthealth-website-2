import Image from 'next/image'
import React from 'react'
import TruthImage from '../public/truthImage.png'
import Button from './button'

function Truths() {
    return ( 
    <> 
    <section id='truth'>
        <div className='__truth-image-wrapper'>
        <Image src={TruthImage} width={500}
        height={500} className=' __truth-image ' alt='' />
        </div>
        <article>
            <h3>test</h3>
            <p>test</p>
        <div className='__truth-box'>
            
        </div>
        <Button/>
        </article>
    </section>
    </>
)
}

export default Truths