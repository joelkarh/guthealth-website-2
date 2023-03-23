import Image from "next/image";
import React, { useState } from 'react'


export default function QaButton(props: { question: string, answer: string, open?: boolean }) {
  const [open, setOpen] = useState(false)
     const {question, answer} = props;

  return (
    <>
    <div id='qaBtn' onClick={()=> setOpen(!open)}>
     <div className={`flex justify-between __qaBtn_question-box`} >
     <h2>{question}</h2>
      <Image src="/downBtn.svg" alt="" priority={true} width={15} height={15} /> 
     </div>
      </div>
      <div className={`${open ? '__qaBtn_answer-box-checked': '__qaBtn_answer-box-none'} `}>
         <p>{answer}</p> 
      </div>
    </>
  )
}
