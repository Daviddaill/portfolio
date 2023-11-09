import React from 'react'
import HorizontalGallery from './HorizontalGallery'
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Style
import CSS from './projects.module.css'
//Assets
import bookingImg from '../../assets/images/projects/booking.png'
import redditImg from '../../assets/images/projects/reddit.png'
import phoImg from '../../assets/images/projects/pho.png'
import giteImg from '../../assets/images/projects/gite.png'


export default function PersonalProjects() {

   const { projects, language } = useLanguageContent()
   const myProjects = language === 'fr' ? `Mes Projets` : 'My Projects';
   const { booking, gite, reddit, pho } = projects.projects
    
   const projectsList = [
      {
         img: bookingImg ,
         title: booking.title ,
         text: booking.text ,
         github: "https://github.com/Daviddaill/Booking-Management-System",
      },
      {
         img: giteImg ,
         title: gite.title ,
         text: gite.text ,
         github: "https://github.com/Daviddaill/gerer-mon-gite",
         website:"https://github.com/Daviddaill/gerer-mon-gite",
      },
      {
         img: redditImg ,
         title: reddit.title ,
         text: reddit.text ,
         github: "https://github.com/Daviddaill/Reddit-Lite",
         website: "https://lite-reddit.netlify.app/",
      },
      {
         img: phoImg ,
         title: pho.title ,
         text: pho.text ,
         website:"https://daviddaill.github.io/Pho-restaurant/",
         github: "https://github.com/Daviddaill/Pho-restaurant",
      }
   ]
   
   return (
      <div className={CSS.projects_container}>
         <h2 className={CSS.projects_title}>{myProjects}</h2>
         <HorizontalGallery projects={projectsList } />
      </div>
   )
}
