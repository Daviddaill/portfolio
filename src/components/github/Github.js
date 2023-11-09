import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
//Hooks
import { useTheme } from '../../hooks/ThemeContext';
//Style
import CSS from './github.module.css'

export default function Github() {
   const { darkMode } = useTheme();
   const [showFullYear, setShowFullYear] = useState(false);
 
   useEffect(() => {
      const handleResize = () => {
         setShowFullYear(window.innerWidth > 450);
      };

      handleResize(); // Check on initial render
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const lenghtSelection = (contributions) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = showFullYear ? 12 : 6;

      return contributions.filter((activity) => {
         const date = new Date(activity.date);
         const monthOfDay = date.getMonth();

         return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
         );
      });
   };

   return (
      <div className={CSS.container}>
         <h2>Days <span className='green_text'>I code</span> </h2>
         <GitHubCalendar
            username="Daviddaill"
            year="last"
            colorScheme={darkMode ? 'dark' : 'light'}
            blockSize={15}
            blockMargin={5}
            color="#0ef77e"
            fontSize={showFullYear? 12 :10}
            transformData={lenghtSelection}
            hideColorLegend
            labels={{
               totalCount: showFullYear ? '{{count}} contributions in the last year' : '{{count}} contributions in the last half year',
            }}
         />
      </div>
      
   );
}
