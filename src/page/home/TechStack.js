import React from 'react'
//Icons
import {
   DiJava,
   DiReact,
   DiNodejs,
   DiJavascript1,
   DiHtml5,
   DiGit,
 } from "react-icons/di";
 import {
   SiCsswizardry,
   SiMysql,
   SiNextdotjs,
 } from "react-icons/si";
//Style
 import CSS from './home.module.css';


export default function TechStack() {
  return (
    <div className={CSS.techStack}>
      <DiJavascript1 className={CSS.icon}/>
      <SiCsswizardry className={CSS.icon}/>
      <DiHtml5  className={CSS.icon}/>
      <SiMysql  className={CSS.icon}/>
      <DiReact  className={CSS.icon}/>
      <DiNodejs  className={CSS.icon}/>
      <DiJava  className={CSS.icon}/>
    </div>
  )
}
