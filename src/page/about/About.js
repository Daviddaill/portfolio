//import style
import CSS from './about.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Components
import Book from '../../components/myBook/Book';
import TeckStack from '../../components/skillset/TeckStack';
import ToolStack from '../../components/skillset/ToolStack';
import Hobbies from '../../components/hobbies/Hobbies';
import Testimonials from '../../components/testimonials/Testimonials';
import Section from '../../components/section/Section';
//Assets
import PageTitle from '../../components/pageTitle/PageTitle';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Resume from '../resume/Resume';
//icons
import { ImQuotesLeft } from 'react-icons/im';

function About() {
   const { about } = useLanguageContent()
   const { theme } = useTheme();
   const nav=[
      {slug:"background", name:about.book},
      {slug:"skills", name:about.tools},
      {slug:"hobbies", name:about.hobbies.title},
      {slug:"resume", name:about.resume},
      {slug:"testimonials", name:about.testimonials_title},
   ]

   return (
      <div className={`main_container ${CSS.about} ${theme}`}>
         <PageTitle
            title={about.title}
            subtitle={about.subtitle}
            description={about.description}
            nav={nav}
             />
         {/*  Top Section  */}

         {/*  Top Section: End */}

         <Section id="background">
            <SectionTitle title={about.book}  color="primary" bg_color={theme} />
            <div className={CSS.book_container}>
               <Book />
            </div>
         </Section>

         <Section id="skills">
            <SectionTitle title={about.tools} color="primary" bg_color={theme} />
            <TeckStack />
            <ToolStack />
         </Section>

         <Section id="hobbies">
            <SectionTitle title={about.hobbies.title} color="primary" bg_color={theme} />
            <Hobbies />
         </Section>
         <Section id="resume">
         <SectionTitle title={about.resume} color="primary" bg_color={theme} />
            <Resume />
         </Section>

         <Section id="testimonials">
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