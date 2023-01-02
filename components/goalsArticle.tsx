import React from 'react'

function GoalsArticle() {
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
    <div className='flex justify-center xl:flex-row xl:justify-start flex-col'>
            {data.length > 0 ? data.map(({id,number,title,description})=>(
                <article key={id} className='text-center __goals-box m-auto my-10 '>
                    <div className='__cirkelBox'> 
                        <span className='__cirkelBox-cirkel'>{number}
                        </span>
                    </div>
                <h2 className='my-8 pt-4'>{title}</h2>
                <p>{description}</p>
                </article>
            )):'nothing'}
            </div>
  )
}

export default GoalsArticle