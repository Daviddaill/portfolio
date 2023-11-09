import CSS from './resume.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Components
import DownloadResume from '../../components/resume/DownloadResume'
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
      <div className={` ${CSS.resume_page} ${theme}`}>       
         {/*  Intro Container  */}
         <div className={CSS.intro_container}>
            <div className={CSS.title_container}>
               <h2 className={`title  ${CSS.title}`}>{resume.title}</h2>
               <p className={`subtitle ${CSS.subtitle}`}>David DAILLERE</p>
               <DownloadResume />
            </div>
         </div>

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