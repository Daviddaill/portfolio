
import React from 'react'
//Icons
import { BiSolidHotel } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";

//Style
import CSS from './solutions.module.css'
//Hooks

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';


export default function Solutions() {
   const { home, language } = useLanguageContent()
   const { darkMode } = useTheme();
   const theme = darkMode ? CSS.dark : CSS.light;
   const { title1, text1, title2, text2, title3, text3, title4, text4 } = home.solutions
   const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         <SectionTitle title="Solutions" color="primary" bg_color={theme} />
         <div className={CSS.solutions_container}>
            <Link
               className={`${CSS.box} bg_color2`}
               to={`/${language}/solutions#hotel`}
               onClick={scrollToSection('hotel')}>
               <BiSolidHotel className={`primary ${CSS.icon}`} size='80px' />
               <h4 className={`primary small_title`}>{title3}</h4>
               <p className={`color5`}>
                  {text3}
               </p>
            </Link>
            <Link 
            className={`${CSS.box} bg_color1 `} 
            onClick={scrollToSection('shop')}
            to={`/${language}/solutions#shop`}>
               <FaBagShopping className={`secondary ${CSS.icon}`} size='80px' />
               <h4 className={`secondary small_title`}> {title2}</h4>
               <p className={`color5`}>
                  {text2}
               </p>
            </Link>
            <Link 
            className={`${CSS.box} bg_color3`} 
            to={`/${language}/solutions#website`}
            onClick={scrollToSection('website')}>

               <MdOutlineWebAsset className={`secondary ${CSS.icon}`} size='80px' />
               <h4 className={`secondary small_title`}> {title1}</h4>
               <p className={`secondary`}>
                  {text1}
               </p>
            </Link>
            <Link 
            className={`${CSS.box} bg_color2`} 
            to={`/${language}/solutions#custom`}
            onClick={scrollToSection('custom')}>
               <FaFileCode className={`tertiary ${CSS.icon}`} size='80px' />
               <h4 className={`tertiary small_title`}> {title4}</h4>
               <p className={`color5`}>
                  {text4}
               </p>
            </Link>

         </div>
      </>


   )
}
