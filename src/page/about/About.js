//import style
import CSS from './about.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Components
import Book from '../../components/myBook/Book';
import TeckStack from '../../components/skillset/TeckStack';
import ToolStack from '../../components/skillset/ToolStack';
import Github from '../../components/github/Github';
import NextPage from '../../components/nextPage/NextPage';
import Hobbies from '../../components/hobbies/Hobbies';
import Testimonials from '../../components/testimonials/Testimonials';
import Section from '../../components/section/Section';
//Assets
import suits from '../../assets/images/suit.png'
 
function About() {
   const { about, language } = useLanguageContent()
   const { theme } = useTheme();
   const projectsPage = language === 'fr' ? 'Mes Projets' : 'My Projects'

   return (
      <div className={`main_container ${CSS.about} ${theme}`}>
         {/*  Top Section  */}
         <div className='intro_container'>
            <div className={CSS.main_image_container}>
               <img
                  className={CSS.main_image}
                  src={suits}
                  alt='David Daillère in a stylish suit' />
            </div>
            <div className='title_container'>
               <h2 className={`title green_text`}>{about.title}</h2>
               <p className={`subtitle`}>David Daillère</p>
            </div>
         </div>
         {/*  Top Section: End */}
         
         <Section>
            <div className={CSS.book_container}>
               <Book />
            </div>
         </Section>

         <Section>
            <TeckStack />
            <ToolStack />
            <Github />
         </Section>

         <Section>
            <Hobbies />
         </Section>

         <Section>
            <Testimonials />
         </Section>

         <Section>
            <NextPage link='projects' pageName={projectsPage} />
         </Section>
      </div>
   )
}

export default About;