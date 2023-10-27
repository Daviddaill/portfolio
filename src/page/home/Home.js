import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Type from './Type';
//import style
import CSS from './home.module.css'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';

import DownloadResume from '../../component/resume/DownloadResume';
import { useTheme } from '../../hooks/ThemeContext';
//icons
import {AiOutlineDown} from 'react-icons/ai'
import NextPage from '../../component/nextPage/NextPage';

//Component

function Home() {
   const { home, about, projects, resume, language} = useLanguageContent()
   const {theme, darkMode} = useTheme();
   const nextPage= language==='fr'?'À Propos': 'About Me'
      return (
   
      <div className= {`${CSS.home} ${theme}`}>
      {/*  WELCOME CONTAINER  */}
         <div className={CSS.welcomeContainer}>
            <div className={CSS.nameContainer}>
               <h2 className={`${CSS.name} green_text`}>David Daillère</h2>
               <p className={CSS.jobTitle}>{home.title}</p>
            </div>
            <div className={CSS.typeContainer} >
               <Type className={CSS.type} />
            </div>
         </div>
         <div className={CSS.next}>
            <NextPage link='about' pageName={nextPage}/>

         </div>
      {/*  OVERVIEW CONTAINER  */}
         <div className={darkMode? `${CSS.overview} ${CSS.dark_overview}`:`${CSS.overview} ${CSS.light_overview}`}>
            <Link
               to={`/${language}/about`}
               className={`${CSS.about} ${CSS.overviewCard}`}>
              
               <h3 className={`${CSS.overviewTitles} title`}>
                  {about.title}
               </h3>
               <p className={CSS.overview_description}>
               {about.description}
               </p>
            </Link>
            <Link 
            to={`/${language}/projects`}
            className={`${CSS.projects} ${CSS.overviewCard} `}>
               <h3 className={`${CSS.overviewTitles} title`}>
               {projects.title}
               </h3>
               <p className={CSS.overview_description}>
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
               <p className={CSS.overview_description}>
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