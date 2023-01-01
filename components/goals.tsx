import React from 'react'

function Goals() {
    const data = [
        {
            id:1,
            number:1,
            title:'Schedule a call',
            description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Nullam dictum felis eu.',
        },
        {
            id:2,
            number:2,
            title:'Set your goals',
            description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Nullam dictum felis eu.',
        },
        {
            id:3,
            number:3,
            title:'Heal',
            description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Nullam dictum felis eu.',
        },
    ]
        
    return (
    <>
        <section id='__goals' className='my-16 xl:py-16 max-w-7xl 	'>
            <div className='my-10 max-w-4xl m-auto'>
            <h1 >So... how does it actually work?</h1>
            <p className='py-6'>
            On our journey, I will teach you different exercises and techniques so you can create the life you deserve. Below are only some of them.
            </p>
            </div>
            
            <div className='flex justify-center xl:flex-row xl:justify-start flex-col'>
            {data.length > 0 ? data.map(({id,number,title,description})=>(
            <>
                <article key={id} className='text-center __goals-box m-auto my-10 '>
                    <div className='__cirkelBox'> 
                        <span className='__cirkelBox-cirkel'>{number}
                        </span>
                    </div>
                <h2 className='my-8 pt-4'>{title}</h2>
                <p>{description}</p>
                </article>
            </>
            
            )):'nothing'}
            </div>
            <div className='__cirkelBox-cirkel-lineprogress'></div>
        </section>
    </>
)
    }

export default Goals