import React from 'react'
import {FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { RiJavascriptFill} from 'react-icons/ri'
import {GrMysql } from 'react-icons/gr'
import CSS from './skillset.module.css'
import { useLanguageContent } from '../../hooks/useLanguageContent'
import { useTheme } from '../../hooks/ThemeContext'

export default function TechStack() {
   const {about}= useLanguageContent();
const {darkMode} = useTheme();
const theme = darkMode? CSS.dark : CSS.light;

  return (
   //  ***TECH STACK***
   <div className={CSS.component_container}>
      <div className={CSS.title_container}>
         <h2> <span className='green_text'>Tech</span>Stack</h2>
      </div>
    <div className={CSS.skillset_container}>
        
      <div className={`${CSS.skillset} ${theme}`}>
         <FaJava className={CSS.icon} size='50px'/>
         <p className={CSS.name}>Java</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <FaHtml5 className={CSS.icon} size='50px'/>
         <p className={CSS.name}>HTML 5</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <FaCss3Alt className={CSS.icon} size='50px'/>
         <p className={CSS.name}>CSS 3</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <FaReact className={CSS.icon} size='50px'/>
         <p className={CSS.name}>React</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <RiJavascriptFill className={CSS.icon} size='50px'/>
         <p className={CSS.name}>JavaScript</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <GrMysql className={CSS.icon} size='50px'/>
         <p className={CSS.name}>MySQL</p>
      </div>
    </div>

   </div>
   
  )
}
