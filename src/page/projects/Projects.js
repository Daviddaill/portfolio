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
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';
import PageTitle from '../../components/pageTitle/PageTitle';

function Projects() {
   const { projects, language } = useLanguageContent()
   const { theme, darkMode } = useTheme();
   const aboutPage = language === 'fr' ? 'A Propos' : 'About Me'
   const themeName = darkMode ? CSS.dark_name : CSS.light_name;

   return (
      <div className={`${theme}`}>
         <PageTitle
            title={projects.title}
            subtitle={projects.subtitle}
            description={projects.description} />
         {/*  Intro Container: End  */}
         {/*  Projects Gallery  */}
         <Section>
            <Works className={`bg_color6 color5`} />
            <PersonalProjects className={`bg_color2 color5`} />
         </Section>
         <Section>
            <NextPage link='about' pageName={aboutPage} />
         </Section>
         {/*  Projects Gallery: end */}
      </div>
   )
}

export default Projects;