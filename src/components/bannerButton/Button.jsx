import React from 'react';
import "./button.scss";
import { FaArrowRight } from "react-icons/fa6";
const Button = ({title}) => {
  return (
    <div className='container-button'>
    <button>{title}</button>
    <FaArrowRight style={{position:"relative",top:"15",left:"170",color:"white",fontSize:"20px"}}/>
    </div>
  )
}

export default Button