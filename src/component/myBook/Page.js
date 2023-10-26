import React from "react";
import CSS from './book.module.css'
import { IoFootstepsOutline, IoReturnDownForwardOutline } from 'react-icons/io5'
const Page = React.forwardRef((props, ref) => {
   const { header, img, text, number } = props


   if (number === 0) {
      return (
         <div className={CSS.page} ref={ref}>
            <h1 className={CSS.book_title}>{header} </h1>
            <p className={CSS.book_title_text}>{text}</p>
            <IoReturnDownForwardOutline  size='50px'  className={CSS.arrow_icon} />
         </div>
      )
   }

   return (
      <div className={CSS.page} ref={ref}>

         <h1 className={CSS.page_title}>{header} </h1>
         {/* {img && <img className={CSS.page_img} src={img} width='60px' height='60px' />} */}
         <div className={CSS.page_text}>
         {text.map((paragraph, idx)=>(
            <p 
            key={idx}
            className={CSS.page_paragraph}
             >
               {paragraph}</p>
         )       
         )}
         </div>
         
         {/* <p className={CSS.page_text}>{text}</p> */}

         <p className={CSS.bottom_page}>Page: {number}</p>
      </div>
   );
});

export default Page;