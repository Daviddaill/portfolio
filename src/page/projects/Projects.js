// STYLE
import CSS from './projects.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';


function Projects() {
   const { projects} = useLanguageContent()
   const { theme } = useTheme();


   return (

      <div className= {`main_container ${CSS.projects} ${theme}`}>
      {/*  INTRO CONTAINER  */}
            <div className='intro_container'>
               <h2 className={`title green_text`}>{projects.title}</h2>
               <p className={`subtitle`}>David DAILLERE</p>
            </div>
      </div>
   )
}

export default Projects;