//Style
import CSS from './home.module.css'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';
//Component
import NextPage from '../../components/nextPage/NextPage';
import Section from '../../components/section/Section';
import Overview from '../../components/overview/Overview';
import Type from './Type';

function Home() {
   const { home, language } = useLanguageContent()
   const { theme, darkMode } = useTheme();
   const nextPage = language === 'fr' ? 'À Propos' : 'About Me'
   const typeColor = darkMode ? CSS.dark : CSS.light;
   
   return (
      <div className={`${CSS.home} ${theme}`}>
         {/*  Top Section  */}
         <div className='intro_container'>
            <div className={CSS.nameContainer}>
               <h2 className={`${CSS.name} green_text`}>David Daillère</h2>
               <p className={CSS.jobTitle}>{home.title}</p>
            </div>
            <div className={CSS.typeContainer} >
               <Type className={`${CSS.type} ${typeColor}`} />
            </div>
         </div>
          {/*  Top Section: End  */}
          {/*  Next Section  */}
         <Section>
            <NextPage link='about' pageName={nextPage} />
            <Overview />
         </Section>
         {/*  Next Section: End  */}
      </div>
   )
}

export default Home;