import { Link, useParams, useNavigate } from "react-router-dom";
import CSS from './language.module.css';
import en from '../../assets/images/en.png';
import fr from '../../assets/images/fr.png';

function Language({position}) {
  const { lang } = useParams();
  const navigate = useNavigate();

  const handleLanguageChange = (newLang) => {
   // Get the current location and replace the language prefix
   const currentLocation = window.location.pathname.replace(`/${lang}`, `/${newLang}`);
 
   // Use the useNavigate hook to update the URL with the new language and modified pathname
   navigate(currentLocation);
 };

 let pos='';
 switch (position) {
  case "header":
    pos=CSS.header_position;
    break
  case "footer":
    // Handle the "footer" position
    pos=CSS.footer_position
    break;
  case "menu":
    // Handle the "menu" position
    pos=CSS.menu_position
    break;
  default:
    // Handle other positions or provide a default behavior
    pos=CSS.header_position
    break;
}

  return (
    <div className={CSS.dropdown}>
      <img src={lang === 'fr' ? fr : en} width='20' height="20" />
      <div 
      className={ `${CSS.dropdownContent} ${pos}`  }
      >
        <div className={CSS.flagContainer} onClick={() => handleLanguageChange('en')}>
          <img src={en} width='20' height="20" alt="English" />
        </div>
        <div className={CSS.flagContainer} onClick={() => handleLanguageChange('fr')}>
          <img src={fr} width='20' height="20" alt="French" />
        </div>
      </div>
    </div>
  );
}

export default Language;
