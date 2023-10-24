import CSS from './resume.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Components
import DownloadResume from '../../component/resume/DownloadResume'
//Assets
import resumeFr from '../../assets/david_daillere_resume_fr.pdf'
import resumeEn from '../../assets/david_daillere_resume_en.pdf'
import imageEn from '../../assets/resume_en.png'
import imageFr from '../../assets/resume_fr.png'



function Resume() {
   const { resume, language } = useLanguageContent()
   const { theme } = useTheme();
   const pdf = language === 'fr' ? resumeFr : resumeEn;
   const resumeImg = language === 'fr' ? imageFr : imageEn;

   return (
      <div className={`main_container ${CSS.resume_page} ${theme}`}>
         {/*  INTRO CONTAINER  */}
         <div className={`intro_container`}>
            <h2 className={`title green_text`}>{resume.title}</h2>
            <p className={`subtitle`}>David DAILLERE</p>
         </div>
         {/*  RESUME CONTAINER  */}     
         <div className={CSS.resume_container}>
            <DownloadResume />
            {/* RESUME DISPLAY  */}
            <a href={pdf} download >
               <img src={resumeImg} className={CSS.resume_image} />
            </a>
            <DownloadResume />
         </div>

      </div>
   )
}

export default Resume;