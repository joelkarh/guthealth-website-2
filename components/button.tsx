import React from 'react'
import { IconContext } from "react-icons";
import {CgArrowLongRight} from "react-icons/cg";

//props 
type Props = {
  text: string;
};
function Button({text}:Props) {
  
  return (
    <button id='CTA' className='flex items-center justify-between px-4 mt-8'>
                <span className='__btn-text-1'>{text}</span>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
          <IconContext.Provider value={{ color: "white", className: "arrow", size:"2.5rem" }}> 
                          <div className=''>
                          <CgArrowLongRight />
                          </div>
          </IconContext.Provider>          
    </button>
  )
  
}
export default Button;




