import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import CSS from './book.module.css'
import intro from '../../assets/images/book-images/about.png'
import lighting from '../../assets/images/book-images/lighting-stage.jpeg'

//Custom Hooks
import { useTheme } from '../../hooks/ThemeContext';
import { useLanguageContent } from '../../hooks/useLanguageContent';


export default function MyBook(props) {
   const { pages } = useLanguageContent()
   const { theme } = useTheme();
   const imgageList=[intro, lighting,'','','','']

   return (
      <div className={CSS.book_container}>
          <HTMLFlipBook 
       width={400} 
       height={500}
       showCover={true}
       maxShadowOpacity={1}
       className={CSS.book}
       >
      
      {
         pages.map((page, idx)=>(
            <Page 
            key= {idx}
            number={idx}
            header={page.header}
            text={page.text}
            img={imgageList[idx]}
            /> ))
      }
       </HTMLFlipBook>
      </div>
      
   );
}