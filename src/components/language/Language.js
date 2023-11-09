import { useParams, useNavigate } from "react-router-dom";
import CSS from './language.module.css';
import en from '../../assets/images/en.png';
import fr from '../../assets/images/fr.png';

/*
a simple Component with a dropdown menu on hover to select the language,
possibility to choose where the dropdown appear according to position on the page( header, footer, menu)
*/
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
      <img src={lang === 'fr' ? fr : en} width='15' height="15"  alt='select language'/>
      <div 
      className={ `${CSS.dropdownContent} ${pos}`  }
      >
        <div className={CSS.flagContainer} onClick={() => handleLanguageChange('en')}>
          <img src={en} width='15' height="15" alt="English" />
        </div>
        <div className={CSS.flagContainer} onClick={() => handleLanguageChange('fr')}>
          <img src={fr} width='15' height="15" alt="French" />
        </div>
      </div>
    </div>
  );
}

export default Language;
