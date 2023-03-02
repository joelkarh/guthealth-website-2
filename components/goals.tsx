import React from 'react'
import GoalsArticle from './goalsArticle'

function Goals() {
   
        
    return (
    <>
        <section id='__goals' className='my-8 md:mt-72  lg:mt-32  lg:mb-32	'>
            <div className='my-10 max-w-4xl m-auto'>
            <h1 >So... how does it actually work?</h1>
            <p className='py-6'>
            On our journey, I will teach you different exercises and techniques so you can create the life you deserve. Below are only some of them.
            </p>
            </div>
            <GoalsArticle/>
            <div className='__cirkelBox-cirkel-lineprogress'></div>
        </section>
    </>
)
    }

export default Goals