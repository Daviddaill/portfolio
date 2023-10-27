import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

//import style
import CSS from './about.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
import Book from '../../component/myBook/Book';
import TeckStack from '../../component/skillset/TeckStack';
import ToolStack from '../../component/skillset/ToolStack';
import Github from '../../component/github/Github';
import NextPage from '../../component/nextPage/NextPage';
import Hobbies from '../../component/hobbies/Hobbies';
import Testimonials from '../../component/testimonials/Testimonials';


function About() {
   const { about, language } = useLanguageContent()
   const { theme } = useTheme();
   const projectsPage= language==='fr'? 'Mes Projets': 'My Projects'


   return (

      <div className={`main_container ${CSS.about} ${theme}`}>
         {/*  INTRO CONTAINER  */}
         <div className='intro_container'>
            <h2 className={`title green_text`}>{about.title}</h2>
            <p className={`subtitle`}>David DAILLERE</p>
         </div>
         <div className={CSS.book_container}>
         <Book />
         </div>
         <div className= {CSS.section}>
            <TeckStack />
            <ToolStack />
         </div >
         <div className= {CSS.section}>
            <Github />
         </div>
         <div className={CSS.section}>
            <Hobbies />
         </div>
         <div className={CSS.section}>
         <Testimonials />
         </div>
         <div className={CSS.section}>
            <NextPage link='projects' pageName={projectsPage} />
         </div>
         
      </div>
   )
}

export default About;