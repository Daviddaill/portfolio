//Style
import CSS from './home.module.css'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';
//media
import david from '../../assets/images/home/portrait-david.png'
//Component

import NextPage from '../../components/nextPage/NextPage';
import Section from '../../components/section/Section';
import Type from './Type';
import Testimonials from '../../components/testimonials/Testimonials';
import Hobbies from '../../components/hobbies/Hobbies';
import Expertise from '../../components/skillset/expertise/Expertise';
import Solutions from '../../components/solutions/Solutions';

function Home() {
   const { home, language } = useLanguageContent()
   const { theme, darkMode } = useTheme();
   const nextPage = language === 'fr' ? 'Solutions' : 'Solutions'
   const themeMode = darkMode ? CSS.dark : CSS.light;
   
   return (
      <div className={`${CSS.home} ${theme}`}>
         {/*  Top Section  */}
         <div className='intro_container'>
            <div className={CSS.nameContainer}>
               <h1 className={`${CSS.name} title secondary`}>David Daillère</h1>
               <p className={`${CSS.jobTitle} primary`}>{home.title}</p>
            </div>
            <div className={CSS.typeContainer} >
               <Type className={`${CSS.type} ${themeMode} typewritter`} />
            </div>
         </div>
          {/*  Top Section: End  */}
          {/*  Next Section  */}
          <Section >
            <div className={`${CSS.img_container} ${themeMode}`} alt="portrait de David">
              <img src={david} width="180" className={CSS.img} />
            </div>
               
            <div className={`width_medium ${CSS.intro_container}`}>
            <h2 className={`primary ${CSS.introTitle} `} >{home.intro.title} </h2>
               <p className={CSS.intro_description}>{home.intro.subtitle}</p>
               <h3 className={`${CSS.intro_subtitle} primary`}>{home.intro.title2}</h3>
               <ul>
                  <li><b>{home.intro.sectionTitle1}</b> 
                  <p>{home.intro.section1}</p></li>
                  <li><b>{home.intro.sectionTitle2}</b> 
                  <p>{home.intro.section2}</p></li>
                  <li><b>{home.intro.sectionTitle3}</b> 
                  <p>{home.intro.section3}</p></li>
               </ul>
            </div>
               
          </Section>
          <Section>
            <Expertise/>
          </Section>
         <Section>
            <Testimonials />
         </Section>
         <Section>
            <Solutions />
         </Section>
         <Section>
            <NextPage link='solutions' pageName={nextPage} />
            
         </Section>
         {/*  Next Section: End  */}
      </div>
   )
}

export default Home;