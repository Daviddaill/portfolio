import { useParams } from 'react-router-dom';
import CSS from './resume.module.css'
import {en} from '../../assets/content/english';
import {fr} from '../../assets/content/french';


function Resume(){
   const {lang}=useParams();
   const resume=  lang==='fr'?  fr.resume: en.resume;

   return (
      <div className={CSS.resume}>
         {resume.title}
      </div>
   )
}

export default Resume;