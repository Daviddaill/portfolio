import React from 'react'
//Style
import CSS from './hobbies.module.css'
//Icons
import { GiWaveSurfer, GiMountains } from 'react-icons/gi'
import { BsCamera, BsBook } from 'react-icons/bs'
import { FaTheaterMasks } from 'react-icons/fa'
//Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent'
import { useTheme } from '../../hooks/ThemeContext'
//assets
import photo from '../../assets/images/hobbies/hobbie-photo.jpg'
import surf from '../../assets/images/hobbies/surf1.jpg'
import fun from '../../assets/images/hobbies/fun.jpg'
import trek from '../../assets/images/hobbies/trekking.jpg'
import stage from '../../assets/images/hobbies/lighting-stage.jpeg'
 
export default function Hobbies() {
   const { about, language } = useLanguageContent();
   const { darkMode } = useTheme();
   const theme = darkMode ? CSS.dark : CSS.light;
   const title = language === 'fr' ? "Hobbies et centres d'intérêt" : 'Hobbies and Interests';
   const { trekking, surfing, photography, reading, theater } = about.hobbies;
   return (
      <div className={CSS.container}>
         <div className={`${theme} ${CSS.icons}`}>
            <p className={CSS.hobby}>
               <GiMountains size='25px' /> {trekking}
            </p>
            <p className={CSS.hobby}>
               <GiWaveSurfer size='25px' /> {surfing}
            </p>
            <p className={CSS.hobby}>
               <BsCamera size='25px' />{photography}
            </p>
            <p className={CSS.hobby}>
               <BsBook size='25px' />{reading}
            </p>
            <p className={CSS.hobby}>
               <FaTheaterMasks size='25px' /> {theater}
            </p>

         </div>
         <div className={CSS.image_library}>
            <div className={CSS.column}>
               <img src={surf} className={`${CSS.img1} ${CSS.img}`} width='100%' alt='David Surfing'/>
               <img src={photo} className={`${CSS.img2} ${CSS.img}`} width='100%' alt='David in Black and White  with his SLR camera' />
            </div>
            <div className={CSS.column}>
               <img src={fun} className={`${CSS.img3} ${CSS.img}`} width='100%' alt='David in a Carnival events'/>
               <img src={stage} className={`${CSS.img3} ${CSS.img}`} width='100%' alt='Concert event'/>
            </div>
            <div className={CSS.column}>
               <img src={trek} className={`${CSS.img4} ${CSS.img}`} width='100%' alt='lake in the Alps'/>
            </div>
         </div>


      </div>
   )
}
