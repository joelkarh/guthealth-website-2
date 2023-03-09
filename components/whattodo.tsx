import React from 'react'
import Button from './button'
import WhatTodoBox from './whattodobox'
const data ={
     title: 'Some of the things you only get with me',
     text: 'Vivamus laoreet. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue.',
     buttonText: 'let"s call ',
     box:[
          {
               title: 'What to do',
               secondTitle:'My Coaching',
               thirdTitle:'Other coaches',
               backgroundColor: 'bg-color-beige',
               font:'box-font-beige',
          },
     ]
}
function WhatTodo() {
    
  return (
    <section id='Whattodo' className='my-10 p-2'>
     <article>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <Button text={data.buttonText}/>
     </article>
     <div className=''>
          {
               data.box.map(({title, secondTitle, thirdTitle, backgroundColor,font},i)=>(
               <WhatTodoBox key={i} title={title} secondTitle={secondTitle} thirdTitle={thirdTitle} backgroundColor={backgroundColor} font={font} />
               ))
          }
          
     </div>
    </section>
  )
}

export default WhatTodo