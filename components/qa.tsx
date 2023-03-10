import React, { useState } from 'react'
import QaButton from './qaButton'
const data ={
               title:'I get asked this a lot',
               subtitle:'If you still have some questions, have a look at my FAQ',
               questions:[
                    {
                        question:'What is the price of your coaching?',
                        answer:'1. Go to the home page'
                    },
                    {
                        question:"I really like what you offer but I'm not sure if it's good for me",
                        answer:'2. Go to the home page'
                    },
                    {
                        question:"What's the price of your coaching?",
                        answer:'3. Go to the home page'
                    }, {
                         question:'What are your social media channels?',
                         answer:'4. Go to the home page'
                     },
                     {
                         question:'Do I need coaching?',
                         answer:'5. Go to the home page'
                     },
                     {
                         question:'I want to join newsletter',
                         answer:'6. Go to the home page'
                     },
                     {
                         question:'Wow your website is cool, who did it?',
                         answer:'7. Go to the home page'
                     },
               ]
}

export default function Qa() {
     
     return (
     <section id='qa'>
     <article className='text-center'>
     <h1>{data.title}</h1>
     <p>{data.subtitle}</p>
     </article>
     {
          data.questions.map(({question, answer},i)=>(
               <QaButton key={i} question={question} answer={answer}/>
          ))
     }
     
     </section>
     )
}
