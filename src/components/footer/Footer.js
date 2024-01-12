//Style
import CSS from './footer.module.css'
//Components
import DownloadResume from '../resume/DownloadResume';
import Settings from '../settings/Settings';
import SocialMedia from '../social_media/SocialMedia';
import Contact from '../contact/Contact';
//Images
import logo from '../../assets/images/logo/d-high-resolution-logo-color-on-transparent-background.png'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';
import { Link } from 'react-router-dom';


function Footer() {
   const { footer, language } = useLanguageContent();
   const { darkMode } = useTheme();
   const theme = darkMode ? CSS.dark_mode : CSS.light_mode
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer className={`${CSS.footer} ${theme}`}>
         {/* LOGO */}
         <Link
         
            className={`${CSS.leftContainer} ${CSS.container}`}
            to={`${language}/home`}
            onClick={scrollToTop}
         // className={({ isActive }) => isActive ? `${CSS.isActive} ` : CSS.isInactive}
         >
            <img src={logo} alt='logo david' width="30px" height="30px"></img>
            <span className={CSS.portfolio}>PORTFOLIO</span>
            <p className={`${CSS.name} primary`}>David Daillère</p>
         </Link>


         {/* CONTACT */}
         <div className={`${CSS.centerContainer} ${CSS.container}`}>
            <h4 className={`small_title ${CSS.title}`}>CONTACT</h4>
            <Contact />
         </div>
         {/* SOCIAL MEDIA */}
         <div className={`${CSS.container}`}>
            <h4 className={`small_title ${CSS.title}`}>{footer.social.title}</h4>
            <p className={CSS.subTitle}>
               {footer.social.subtitle}
            </p>
            <div> <SocialMedia /> </div>

         </div>
         <div className={`${CSS.centerContainer} ${CSS.container}`}>
            <DownloadResume display='dark' />
         </div>
         {/* SETTINGS */}
         <div className={`${CSS.rightContainer} ${CSS.container} ${CSS.settings}`}>
            <Settings position='footer' />
         </div>
         <div className={CSS.author}>
            <p className={`small_text`}>{footer.author} <span className={` primary`}>David DAILLERE</span></p>
            <p className={`small_text ${CSS.tool}`}>{footer.tool} </p>

         </div>
      </footer>
   )
}

export default Footer;