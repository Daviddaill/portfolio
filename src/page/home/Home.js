import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Type from './Type';
//import style
import CSS from './home.module.css'
//Custom Hooks
import { useLanguageContent } from '../../assets/content/useLanguageContent';
import { useTheme } from '../../component/themeContext/ThemeContext';
import DownloadResume from '../../component/resume/DownloadResume';
//Component




function Home() {
   const { home, about, projects, resume } = useLanguageContent()
   const { darkMode } = useTheme();
   const { lang } = useParams();
   const language = lang || 'en';
   return (

      <div className={darkMode ? `${CSS.home} ${CSS.dark_mode}` : `${CSS.home} ${CSS.light_mode}`}>
      {/*  WELCOME CONTAINER  */}
         <div className={CSS.welcomeContainer}>
            <div className={CSS.nameContainer}>
               <h2 className={`${CSS.name} green_text`}>David Daillere</h2>
               <p className={CSS.jobTitle}>{home.title}</p>
            </div>
            <div className={CSS.typeContainer} >
               <Type className={CSS.type} />
            </div>
         </div>
      {/*  OVERVIEW CONTAINER  */}
         <div className={CSS.overview}>
            <Link
               to={`/${language}/about`}
               className={`${CSS.about} ${CSS.overviewCard}`}>
               <h3 className={`${CSS.overviewTitles} title`}>
                  {about.title}
               </h3>
               <p className={CSS.overviewDescription}>
               {about.description}
               </p>
            </Link>
            <Link 
            to={`/${language}/projects`}
            className={`${CSS.projects} ${CSS.overviewCard}`}>
               <h3 className={`${CSS.overviewTitles} title`}>
               {projects.title}
               </h3>
               <p className={CSS.overviewDescription}>
               {projects.description}
               </p>
            </Link>
            <div           
            className={`${CSS.resume} ${CSS.overviewCard}`}>
               <Link 
               to={`/${language}/resume`} >
               <h3 className={`${CSS.overviewTitles} title`}>
               {resume.title}
               </h3>
               <p className={CSS.overviewDescription}>
               {resume.description}                         
               </p>
               </Link >
               <DownloadResume /> 
            </div>
         </div>
      </div>
   )
}

export default Home;