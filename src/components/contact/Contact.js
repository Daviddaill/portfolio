import React from 'react'
import CSS from './contact.module.css'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Contact({ isHorizontal }) {
   const position = isHorizontal ? CSS.horizontal : '';
    
   return (
      <div className={` ${position}`}>
         <p >
            <a
               className={CSS.contact}
               href="mailto:dailleredavid@gmail.com" >
               <AiOutlineMail size='1.2em' />
               dailleredavid@gmail.com</a>
         </p>
         <p>
            <a
               className={CSS.contact}
               href="tel:+33977215121">
               <AiOutlinePhone size='1.2em' />
               +33 977 215 121
            </a>
         </p>
      </div>
   )
}
