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
import PageTitle from '../../components/pageTitle/PageTitle';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Resume from '../resume/Resume';
//icons
import { ImQuotesLeft } from 'react-icons/im';

function About() {
   const { about, language } = useLanguageContent()
   const { theme } = useTheme();
   const projectsPage = language === 'fr' ? 'Mes Projets' : 'My Projects'

   return (
      <div className={`main_container ${CSS.about} ${theme}`}>
         <PageTitle
            title={about.title}
            subtitle={about.subtitle}
            description={about.description} />
         {/*  Top Section  */}

         {/*  Top Section: End */}

         <Section>
            <SectionTitle title={about.book} color="primary" bg_color={theme} />
            <div className={CSS.book_container}>
               <Book />
            </div>
         </Section>

         <Section>
            <SectionTitle title={about.tools} color="primary" bg_color={theme} />
            <TeckStack />
            <ToolStack />
         </Section>

         <Section>
            <SectionTitle title={about.hobbies.title} color="primary" bg_color={theme} />
            <Hobbies />
         </Section>
         <Section>
         <SectionTitle title={about.resume} color="primary" bg_color={theme} />
            <Resume />
         </Section>

         <Section>
            <Testimonials />
         </Section>

         <Section >
         <ImQuotesLeft size="40px" className={`primary ${CSS.thankyou_text}`} />
            <p className={`color7 ${CSS.thankyou_text}`}>{about.thanks}</p>
            <p className={`primary ${CSS.thankyou_text}`}>David D.</p>
         </Section>
      </div>
   )
}

export default About;