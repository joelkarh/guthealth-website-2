import Link from 'next/link';
import React from 'react'
import { IconContext } from "react-icons";
import {CgArrowLongRight} from "react-icons/cg";

//props 
type Props = {
  text: string;
  btnColor: string;
  bg__color_arrow: string;
  btnText: string;
};
function Button({text,btnColor, bg__color_arrow,btnText}:Props) {
  
  return (
    <Link href={'/contact'}>
    <button id='CTA' className={`${btnColor}  `}>
      <span className={btnText}>{text}</span>
      <div className={`cta__wrap ${bg__color_arrow}`}>
        <div className={`cta__arrow cta__arrow-up ${bg__color_arrow}`}></div>
        <div className={`cta__arrow cta__arrow-down ${bg__color_arrow}`}></div>
      </div>
      
      </button>
      </Link>
  )
  
}
export default Button;




