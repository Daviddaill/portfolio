import { useParams } from 'react-router-dom';
import CSS from './projects.module.css'
import {en} from '../../assets/content/english';
import {fr} from '../../assets/content/french';


function Projects(){
   const {lang}=useParams();
   const projects=  lang==='fr'?  fr.projects: en.projects;

   return (
      <div className={CSS.projects}>
         {projects.title}
      </div>
   )
}

export default Projects;