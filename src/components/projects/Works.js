import React from 'react'
import HorizontalGallery from './HorizontalGallery'
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Style
import CSS from './projects.module.css'
//Assets
import uppaTopImg from '../../assets/images/projects/uppatop.png'
// import comingSoon from '../../assets/images/projects/coming_soon.png'
import gitebleu from '../../assets/images/projects/gitebleu2.png'
import igniteImg from '../../assets/images/projects/ignite.png'

export default function Works({variant, className}) {

   const { projects, language } = useLanguageContent()
   const recentWork = language === 'fr' ? `Projets Professionnels ` : 'Professional Work';
   const {  uppaTop, ignite, giteBleu } = projects.recentWork
    
   const projectsList = [

      {
         img: gitebleu ,
         title: giteBleu.title ,
         company: giteBleu.company ,
         text: giteBleu.text ,
         features: giteBleu.features,
         website:'https://ogitebleu.com/',
         github: "",
      },
      {
         img: igniteImg ,
         title: ignite.title ,
         company: ignite.company ,
         text: ignite.text ,
         features: ignite.features,
         github: "",
         website: "https://ignitesrilanka.com/",
      },
      {
         img: uppaTopImg ,
         title: uppaTop.title ,
         company: uppaTop.company ,
         text: uppaTop.text ,
         features: uppaTop.features,
         github: "https://github.com/Daviddaill/Pdf_to_html_template",
         website:"",
      },

   ]
   

   return (
      <div className={CSS.projects_container}>        
         <HorizontalGallery 
         projects={projectsList }
         variant={variant}
         className={className}
         GalleryTitle={recentWork} />
         
      </div>
   )
}
