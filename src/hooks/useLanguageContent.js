import { useParams } from 'react-router-dom';
import  {fr}  from '../assets/content/french';
import  {en}  from '../assets/content/english';
import { pagesEn} from '../assets/content/bookEn'
import { pagesFr} from '../assets/content/bookFr'

export function useLanguageContent() {
  const { lang } = useParams();
  const language = lang || 'en';

  const header = language === 'fr' ? fr.header : en.header;
  const footer = language === 'fr' ? fr.footer : en.footer;
  const home = language === 'fr' ? fr.home : en.home;
  const about = language === 'fr' ? fr.about : en.about;
  const projects = language === 'fr' ? fr.projects : en.projects;
  const resume = language === 'fr' ? fr.resume : en.resume;
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
    pages
  };
}