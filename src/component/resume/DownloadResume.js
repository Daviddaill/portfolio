import React from 'react';
import { useParams } from 'react-router-dom';
// style
import CSS from './downloadResume.module.css';
// Assets
import { AiOutlineDownload } from "react-icons/ai";
import resumeFr from '../../assets/resume_fr.pdf'
import resumeEn from '../../assets/resume_en.pdf'
//Custom Hooks
import { useLanguageContent } from '../../assets/content/useLanguageContent';

export default function DownloadResume({ display }) {
  const { resume } = useLanguageContent();
  const { lang } = useParams();
  const language = lang || 'en';
  const pdf = language === 'fr' ? resumeFr : resumeEn;

  return (
    <div className={display === 'dark' ? `${CSS.darkButton} ${CSS.button}` : `${CSS.brightButton} ${CSS.button}`}>
      <a
        href={pdf}
        download
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp; {resume.download}
      </a>
    </div>
  )
}
