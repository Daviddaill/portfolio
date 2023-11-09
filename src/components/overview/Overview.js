import React from 'react'
import { Link } from 'react-router-dom';
//import style
import CSS from './overview.module.css'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Hooks
import { useTheme } from '../../hooks/ThemeContext';

export default function Overview() {
   const { about, projects, resume, language } = useLanguageContent()
   const {  darkMode } = useTheme();

   return (
         <div className={darkMode ? `${CSS.overview} ${CSS.dark_overview}` : `${CSS.overview} ${CSS.light_overview}`}>
            <Link
               to={`/${language}/about`}
               className={`${CSS.about} ${CSS.overviewCard}`}>

               <h3 className={`${CSS.overviewTitles} green_text`}>
                  {about.title}
               </h3>
               <p className={CSS.overview_description}>
                  {about.description}
               </p>
            </Link>
            <Link
               to={`/${language}/projects`}
               className={`${CSS.projects} ${CSS.overviewCard} `}>
               <h3 className={`${CSS.overviewTitles}  green_text`}>
                  {projects.title}
               </h3>
               <p className={CSS.overview_description}>
                  {projects.description}
               </p>
            </Link>
            <div
               className={`${CSS.resume} ${CSS.overviewCard}`}>
               <Link
                  to={`/${language}/resume`} >
                  <h3 className={`${CSS.overviewTitles} green_text`}>
                     {resume.title}
                  </h3>
                  <p className={CSS.overview_description}>
                     {resume.description}
                  </p>                  
               </Link >              
            </div>
         </div>
   )
}
 