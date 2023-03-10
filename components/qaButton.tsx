import Image from "next/image";
import React, { useState } from 'react'

export default function QaButton(props:{question:string, answer:string, open?:boolean}) {
     const {question, answer} = props;
     const [open, setOpen] = useState(false)
     const handleClickOpen = () => {
         setOpen(true)
         console.log(open)
     }
  return (
    <>
    <div id='qaBtn'>
     <div className="flex justify-between __qaBtn_question-box" onClick={handleClickOpen}>
     <h2>{question}</h2>
     <Image src="/downBtn.svg" alt="" width={12} height={6} />
     </div>
     <div className="__qaBtn_answer-box">
          {answer}
     </div>
    </div>
    </>
  )
}
