// Style
import CSS from './projects.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Components
import Gallery from '../../components/gallery/Gallery'
import Section from '../../components/section/Section';
import Works from '../../components/projects/Works';
import PersonalProjects from '../../components/projects/PersonalProjects';
import NextPage from '../../components/nextPage/NextPage';

function Projects() {
   const { projects, language } = useLanguageContent()
   const { theme } = useTheme();
   const resumePage = language === 'fr' ? 'CV' : 'Resume'
 
   return (
      <div className={`main_container ${CSS.projects} ${theme}`}>
         {/*  Intro Container  */}
         <div className='intro_container'>
            <div className={CSS.image_container}>
               <Gallery />
            </div>
            <div className='title_container'>
               <h2 className={`title green_text`}>{projects.title}</h2>
               <p className={`subtitle`}>David Daillère</p>
            </div>
         </div>
         {/*  Intro Container: End  */}
         {/*  Projects Gallery  */}
         <Section>
            <Works />
            <PersonalProjects />
         </Section>
         <Section>
            <NextPage link='resume' pageName={resumePage} />
         </Section>
         {/*  Projects Gallery: end */}
      </div>
   )
}

export default Projects;