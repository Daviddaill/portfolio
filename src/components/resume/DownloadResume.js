import React from 'react';
// style
import CSS from './downloadResume.module.css';
// Assets
import { BiSolidDownload } from "react-icons/bi";
import resumeFr from '../../assets/cv_david_daillere.pdf'
import resumeEn from '../../assets/resume_david_daillere.pdf'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';

export default function DownloadResume({ display }) {
  const { resume, language } = useLanguageContent();
  const {darkMode} = useTheme();
  const pdf = language === 'fr' ? resumeFr : resumeEn;
  const themeButton= darkMode? `accent ` :  `accent `;
 
  return (
    <div className={CSS.button}>
      <a
       className={`primary`}
        href={pdf}
        download
        target="_blank"
        rel="noreferrer"
        style={{ maxWidth: "250px" }
        
      }
      >
        <BiSolidDownload size='1.5em'/>
        &nbsp; {resume.download}
      </a>
    </div>
  )
}
