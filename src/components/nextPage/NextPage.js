import React from 'react'
import { Link } from 'react-router-dom'
//Icons
import {MdNavigateNext} from 'react-icons/md'
//Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent'
import { useTheme } from '../../hooks/ThemeContext'
//Style
import CSS from './nextPage.module.css'

export default function NextPage({link, pageName}) {
const {language}= useLanguageContent();
const{darkMode}= useTheme();
const theme= darkMode? CSS.dark: CSS.light;
const title = language === 'fr' ? 'Continuer vers ': 'Continue to ';
  return (
    <div className={`${theme} ${CSS.container}`}>
        <Link to={`/${language}/${link}`} className={CSS.link}>
      <p>{title} {pageName} </p>
      <MdNavigateNext size='50px'  className={CSS.icon}/>
      </Link>
    </div>
  )
}
 