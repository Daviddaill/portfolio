import React from 'react'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
//STYLE
import CSS from './socialMedia.module.css'

export default function SocialMedia({isVertical}) {
   const position= isVertical? CSS.vertical: ''
   return (
         <ul className={`${CSS.iconsContainer } ${position}`}>
            <li className={CSS.iconContainer}>
               <a
                  href="https://github.com/Daviddaill"
                  target="_blank"
                  rel="noreferrer"
                  className={CSS.icon}
               > <AiFillGithub size='1.4em' />
               </a>
            </li>
            <li className={CSS.iconContainer}>
               <a
                  href="https://www.linkedin.com/in/david-daillere-7a1103161/"
                  target="_blank"
                  rel="noreferrer"
                  className={CSS.icon}
               >  <FaLinkedinIn size='1.4em' />
               </a>
            </li>
            <li className={CSS.iconContainer}>
               <a
                  href="https://www.instagram.com/david_daill"
                  target="_blank"
                  rel="noreferrer"
                  className={CSS.icon}
               > <AiFillInstagram size='1.4em' />
               </a>
            </li>
         </ul>
   )
}
