import React from 'react'
import HorizontalGallery from './HorizontalGallery'
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Style
import CSS from './projects.module.css'
//Assets
import uppaTopImg from '../../assets/images/projects/uppatop.png'
import comingSoon from '../../assets/images/projects/coming_soon.png'

export default function Works() {

   const { projects, language } = useLanguageContent()
   const recentWork = language === 'fr' ? `Travaux Récent ` : 'Recent Work';
   const {  uppaTop, ignite, giteBleu } = projects.recentWork
    
   const projectsList = [

      {
         img: uppaTopImg ,
         title: uppaTop.title ,
         company: uppaTop.company ,
         text: uppaTop.text ,
         github: "https://github.com/Daviddaill/Daviddaill-fullstack-course",
         website:"",
      },
      {
         img: comingSoon ,
         title: ignite.title ,
         company: ignite.company ,
         text: ignite.text ,
         github: "",
         website: "",
      },
      {
         img: comingSoon ,
         title: giteBleu.title ,
         company: giteBleu.company ,
         text: giteBleu.text ,
         website:"",
         github: "",
      }
   ]
   

   return (
      <div className={CSS.projects_container}>
         <h2 className={CSS.projects_title}>{recentWork}</h2>
         <HorizontalGallery projects={projectsList } />
      </div>
   )
}
