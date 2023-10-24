import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

//import style
import CSS from './about.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
import Book from '../../component/myBook/Book';


function About() {
   const { about } = useLanguageContent()
   const { theme } = useTheme();


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
         
      </div>
   )
}

export default About;