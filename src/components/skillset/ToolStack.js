import React from 'react'
//Icons
import {DiVisualstudio, DiNetbeans } from 'react-icons/di'
import {FaCpanel, FaWordpressSimple} from 'react-icons/fa'
import {SiFirebase, SiGithub} from 'react-icons/si'
import { FaCalendarAlt } from "react-icons/fa";
//Style
import CSS from './skillset.module.css'
//Hooks
import { useTheme } from '../../hooks/ThemeContext'

export default function ToolStack() {
const {darkMode} = useTheme();
const theme = darkMode? CSS.dark : CSS.light;

  return (
   <div className={CSS.component_container}>
      <div className={CSS.title_container}>
         <h2> <span className='green_text'>Tool</span>Stack</h2>
      </div>
    <div className={CSS.skillset_container}>
        
      <div className={`${CSS.skillset} ${theme}`}>
         <DiVisualstudio className={CSS.icon} size='45px'/>
         <p className={CSS.name}>VS Code</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <SiGithub className={CSS.icon} size='45px'/>
         <p className={CSS.name}>Git-Hub</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <DiNetbeans className={CSS.icon} size='45px'/>
         <p className={CSS.name}>NetBeans</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <FaCpanel className={CSS.icon} size='45px'/>
         <p className={CSS.name}>cPanel</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <FaWordpressSimple className={CSS.icon} size='45px'/>
         <p className={CSS.name}>WordPress</p>
      </div>
      <div className={`${CSS.skillset} ${theme}`}>
         <SiFirebase className={CSS.icon} size='45px'/>
         <p className={CSS.name}>Firebase</p>
      </div>
    </div>
    {
      /*
      Add a new Skill here:
      Copy paste div and import icons fron react-icons library
      */
    }
 
   </div>
   
  )
}
