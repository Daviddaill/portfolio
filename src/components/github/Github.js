import React from 'react';
import GitHubCalendar from 'react-github-calendar';
//Hooks
import { useTheme } from '../../hooks/ThemeContext';
//Style
import CSS from './github.module.css'

export default function Github() {
   const { darkMode } = useTheme();
 
 
   return (
      <div className={CSS.container}>
         <h2>Days <span className='green_text'>I code</span> </h2>
         <GitHubCalendar
            username="Daviddaill"
            colorScheme={darkMode ? 'dark' : 'light'}
            blockSize={15}
            blockMargin={5}
            color="#0ef77e"
            fontSize={11}
            style={{width:'100%'}}
         />
      </div>
      
   );
}
