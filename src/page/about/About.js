import { useParams } from 'react-router-dom';
import CSS from './about.module.css'
import {en} from '../../assets/content/english';
import {fr} from '../../assets/content/french';


function About(){
   const {lang}=useParams();
   const about=  lang==='fr'?  fr.about: en.about;

   return (
      <div className={CSS.about}>
         {about.title}
      </div>
   )
}

export default About;