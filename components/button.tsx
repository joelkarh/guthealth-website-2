import React from 'react'
import { IconContext } from "react-icons";
import {CgArrowLongRight} from "react-icons/cg";

//props 
type Props = {
  text: string;
  btnColor: string;
  bg__color_arrow: string;
};
function Button({text,btnColor, bg__color_arrow}:Props) {
  
  return (
    <button id='CTA' className={`${btnColor}  `}>
                <span className={`__btn-text-1`}>{text}</span>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      
      <div className={`cta__wrap ${bg__color_arrow}`}>
        <div className={`cta__arrow cta__arrow-up ${bg__color_arrow}`}></div>
        <div className={`cta__arrow cta__arrow-down ${bg__color_arrow}`}></div>
      </div>
      
    </button>
  )
  
}
export default Button;




