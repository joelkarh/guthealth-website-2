import React from 'react'

function WhatTodoBox(props:{title:string, secondTitle:string, thirdTitle:string, backgroundColor:string, font:string}) {
     const {title, secondTitle,thirdTitle,backgroundColor, font}= props
  return (
    <table className='whattodo-box'>
     <thead >
          <tr className={`${backgroundColor} ${font} `}>
          <th>{title}</th>
          <th>{secondTitle}</th>
          <th>{thirdTitle}</th>
          </tr>
     </thead>

    </table>
  )
}

export default WhatTodoBox