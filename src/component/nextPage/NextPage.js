import React from 'react'
import {MdNavigateNext} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useLanguageContent } from '../../hooks/useLanguageContent'
import CSS from './nextPage.module.css'
import { useTheme } from '../../hooks/ThemeContext'

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
