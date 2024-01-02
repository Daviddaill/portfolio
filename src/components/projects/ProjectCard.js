import React from 'react'
import { useTheme } from '../../hooks/ThemeContext'
import { MdOutlineWebAsset } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { useLanguageContent } from '../../hooks/useLanguageContent';
import CSS from './projects.module.css'

/*
HorizontalGallery will create a ProjectCard for each  element of the given array:
- Website, github and company are Optional and will not break if not given
*/
export default function ProjectCard({ img, title, text, website, github, company, features }) {
   const { darkMode } = useTheme();
   const { language } = useLanguageContent();
   const websiteTitle = language === 'fr' ? 'Site Internet' : 'Website'

   return (
      <div className={CSS.card}>
         <div className={CSS.image_container}>
            <img className={CSS.image} src={img} width='100%' alt='project screenshot' />
         </div>
         <div className={CSS.description_container}>
            <div className={CSS.text_container}>
               {company &&
                  <h3 className={CSS.title} >
                     {company}
                  </h3>}
               <h4 className={`${CSS.subtitle} primary`}>{title}</h4>
               <p className={CSS.text}>{text}</p>
               {
                  features &&
                  <ul >
                     {features.map((feature, index) => (
                        <li key={index} className={CSS.features}>{feature}</li>
                     ))}
                  </ul>
               }
            </div>
            <div className={CSS.link_Container}>
               {/* BUTTONS */}
               <div className={CSS.buttons}>
                  {website &&
                     <div className={darkMode ? `${CSS.darkButton} ${CSS.button}` : `${CSS.brightButton} ${CSS.button}`}>
                        <a
                           href={website}
                           rel="noreferrer"
                           target="_blank"
                           style={{ maxWidth: "250px" }}
                        >
                           <MdOutlineWebAsset size='1.5em' />
                           &nbsp; {websiteTitle}
                        </a>
                     </div>
                  }
                  {github &&
                     <div className={darkMode ? `${CSS.darkButton} ${CSS.button}` : `${CSS.brightButton} ${CSS.button}`}>
                        <a
                           href={github}
                           target="_blank"
                           rel="noreferrer"
                           style={{ maxWidth: "250px" }}
                        >
                           <AiFillGithub size='1.5em' />
                           &nbsp; Git Hub
                        </a>
                     </div>
                  }
               </div>
            </div>
         </div>
      </div>
   )
}
