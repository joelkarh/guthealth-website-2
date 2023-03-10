import React from 'react'
import Button from './button'
import WhatTodoBox from './whattodobox'
const data ={
     title: 'Some of the things you only get with me',
     text: 'Vivamus laoreet. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue.',
     buttonText: 'let"s call ',
     box:
          {
               title: 'What to do',
               secondTitle:'My Coaching',
               thirdTitle:'Other coaches',
               backgroundColor: 'bg-color-beige',
               font:'box-font-beige',
          },
     allThings: [
          {
          title:'Meditation',
          backgroundColor:'primary-bg',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Weekly 1 on 1 calls',
          backgroundColor:'bg-color-beige',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Community',
          backgroundColor:'primary-bg',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Personalized healing plan',
          backgroundColor:'bg-color-beige',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Bespoke approach',
          backgroundColor:'primary-bg',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Journaling',
          backgroundColor:'bg-color-beige',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Yoga classes',
          backgroundColor:'primary-bg',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
          {
          title:'Diet advice',
          backgroundColor:'bg-color-beige',
          checkmark:'/checkmark.svg',
          exit:'./exit.svg'
          },
     ]
}
function WhatTodo() {
    
  return (
    <section id='Whattodo' className=' p-2 lg:p-0 container mx-auto mb-32'>
     <article className='my-10 lg:mt-0'>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <Button text={data.buttonText}/>
     </article>
     <table className='whattodo-box'>
     <thead className='p-1'>
          <tr className={`${data.box.backgroundColor} ${data.box.font} `}>
          <th className=''>{data.box.title}</th>
          <th>{data.box.secondTitle}</th>
          <th>{data.box.thirdTitle}</th>
          </tr>
     </thead>
          {
               data.allThings.map(({title, backgroundColor, checkmark, exit, },i)=>(
               <WhatTodoBox key={i} title={title} checkmark={checkmark} exit={exit} backgroundColor={backgroundColor}/>
               ))
          }
          
     </table>
    </section>
  )
}

export default WhatTodo