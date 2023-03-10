/* eslint-disable @next/next/no-img-element */
import React from 'react'

function WhatTodoBox(props:{ title:string, checkmark:string, exit:string, backgroundColor:string}) {
     const { title, checkmark, exit, backgroundColor}= props
  return (
    
     <tbody>
      <tr className={`${backgroundColor}`}>
        <td>{title}</td>
        <td><img src={`${checkmark}`} alt=""/></td>
        <td><img src={`${exit}`} alt="" /></td>
      </tr>
     </tbody>
 
  )
}

export default WhatTodoBox