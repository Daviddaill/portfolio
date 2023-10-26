import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import CSS from './book.module.css'
//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useEffect, useState } from 'react';


export default function MyBook(props) {
   const { pages } = useLanguageContent()
   const { darkMode } = useTheme();
   const theme = darkMode ? CSS.dark_mode : CSS.light_mode;
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width when the screen is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const width = windowWidth < 440 ? 300 : 400;

   return (
      <div className={`${theme} ${CSS.book_container}`}>
         <HTMLFlipBook
            width={width}
            height={500}          
            showCover={true}        
            maxShadowOpacity={1}
            className={`${CSS.book} `}
         >
            {
               pages.map((page, idx) => (
                  <Page
                     key={idx}
                     number={idx}
                     header={page.header}
                     text={page.text}
                  />))
            }
         </HTMLFlipBook>
      </div>

   );
}