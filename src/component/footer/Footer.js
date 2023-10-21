//Style
import CSS from './footer.module.css'
//Components
import DownloadResume from '../resume/DownloadResume';
//Images
import logo from '../../assets/images/logo/d-high-resolution-logo-color-on-transparent-background.png'

//Custom Hooks
import{ useLanguageContent } from '../../assets/content/useLanguageContent';
import { useTheme } from '../themeContext/ThemeContext';
import Settings from '../settings/Settings';
import SocialMedia from '../social_media/SocialMedia';
import Contact from '../contact/Contact';

function Footer() {
const {footer}= useLanguageContent();
const { darkMode } = useTheme();

   return (
      <footer className={darkMode ? `${CSS.footer} ${CSS.dark_mode}` : `${CSS.footer} ${CSS.light_mode}`}>
      {/* LOGO */}
         <div className={`${CSS.leftContainer} ${CSS.container}`}>
            <img src={logo} alt='logo david' width="30px" height="30px"></img>
            <span className={CSS.portfolio}>PORTFOLIO</span>
            <p className={CSS.name}>David Daillère</p>
         </div>
      {/* CONTACT */}
         <div className={`${CSS.centerContainer} ${CSS.container}`}>
         <h4>CONTACT</h4>
          <Contact />
         </div>
      {/* SOCIAL MEDIA */}
         <div className={`${CSS.container}`}>
            <h4>{footer.social.title}</h4>
            <p className={CSS.subTitle}>
               {footer.social.subtitle}
            </p>
            <SocialMedia />
         </div>
         <div className={`${CSS.centerContainer} ${CSS.container}`}>
            <DownloadResume display='dark'/>
         </div>
         {/* SETTINGS */}
         <div className={`${CSS.rightContainer} ${CSS.container} ${CSS.settings}`}>
         <Settings position='footer'/>
         </div>
      </footer>
   )
}

export default Footer;