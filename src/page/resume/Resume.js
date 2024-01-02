import CSS from './resume.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Components
import DownloadResume from '../../components/resume/DownloadResume'
//Assets
import resumeFr from '../../assets/cv_david_daillere.pdf'
import resumeEn from '../../assets/resume_david_daillere.pdf'
import imageEn from '../../assets/resume.png'
import imageFr from '../../assets/cv.png'

function Resume() {
   const { resume, language } = useLanguageContent()
   const { theme } = useTheme();
   const pdf = language === 'fr' ? resumeFr : resumeEn;
   const resumeImg = language === 'fr' ? imageFr : imageEn;

   return (
      <div className={` ${CSS.resume_page} ${theme}`}>
         {/*  Intro Container  */}

         <DownloadResume />

         {/*  Resume Container  */}
         <div className={CSS.resume_container}>
            <a href={pdf} download >
               <img src={resumeImg} className={CSS.resume_image} alt='David Daillere - Web Developer | Resume' />
            </a>
         </div>
      </div>
   )
}

export default Resume;