import { useParams } from 'react-router-dom';
//Assets
import  {fr}  from '../assets/content/french';
import  {en}  from '../assets/content/english';
import { pagesEn} from '../assets/content/bookEn'
import { pagesFr} from '../assets/content/bookFr'
 
/*
This hook allow you to extract any part of the selected language
- to add a new object in the content files, 
create a new const variable  as shown bellow and then return it 
- language: tells you what language is selected
*/
export function useLanguageContent() {
  const { lang } = useParams();
  const language = lang || 'en';
//select the file according to language selection
  const header = language === 'fr' ? fr.header : en.header;
  const footer = language === 'fr' ? fr.footer : en.footer;
  const home = language === 'fr' ? fr.home : en.home;
  const about = language === 'fr' ? fr.about : en.about;
  const projects = language === 'fr' ? fr.projects : en.projects;
  const resume = language === 'fr' ? fr.resume : en.resume;
  const solutions = language === 'fr' ? fr.solutions : en.solutions;
//book content
const pages= language === 'fr' ? pagesFr : pagesEn;

  return {
    header,
    footer,
    home,
    about,
    projects,
    resume,
    language,
    pages,
    solutions,
  };
}