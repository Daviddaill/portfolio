import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
//style
import CSS from "./pageTitle.module.css"
import { useTheme } from '../../hooks/ThemeContext';

export default function PageTitle({ id, className, title, subtitle, description, nav }) {

   const { theme, darkMode } = useTheme();
   const themeName = darkMode ? CSS.dark_name : CSS.light_name;

   return (
      <>
         <div className={CSS.intro_container}>
            <div className={CSS.title_container}>

               <h1 className={`primary title`}>{title}</h1>
               <h2 className={`secondary title`}>{subtitle}</h2>
            </div>
            <p className={`${CSS.name} ${themeName}`}>David Daillère</p>
         </div>
         <div id={id} className={className}>
            <div className={CSS.description_container}>
               <p className={CSS.decription_text}>{description}</p>
               {nav &&
                  <ul className={`${CSS.category_list} accent`}>
                     {nav.map(item => (
                        <li><ScrollLink to={item.slug} smooth={true} duration={500} offset={-150}>{item.name}</ScrollLink></li>
                     ))}
                  </ul>
               }
            </div>
         </div>
      </>
   )
}
