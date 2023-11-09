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
import{ useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';

function Footer() {
const {footer}= useLanguageContent();
const { darkMode } = useTheme();
const theme= darkMode? CSS.dark_mode: CSS.light_mode
   return (
      <footer className={`${CSS.footer} ${theme}`}>
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