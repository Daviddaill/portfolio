import React from 'react';
// style
import CSS from './downloadResume.module.css';
// Assets
import { BiSolidDownload } from "react-icons/bi";
import resumeFr from '../../assets/david_daillere_resume_fr.pdf'
import resumeEn from '../../assets/david_daillere_resume_en.pdf'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';

export default function DownloadResume({ display }) {
  const { resume, language } = useLanguageContent();
  const {darkMode} = useTheme();
  const pdf = language === 'fr' ? resumeFr : resumeEn;

  return (
    <div className={display === 'dark'|| darkMode ? `${CSS.darkButton} ${CSS.button}` : `${CSS.brightButton} ${CSS.button}`}>
      <a
        href={pdf}
        download
        target="_blank"
        style={{ maxWidth: "250px" }
      }
      >
        <BiSolidDownload size='1.5em'/>
        &nbsp; {resume.download}
      </a>
    </div>
  )
}
