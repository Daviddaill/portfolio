import React from "react";
import CSS from './book.module.css'
const Page = React.forwardRef((props, ref) => {
const {header, img, text, number} = props


if(number === 0 ){
   return(
      <div  className={CSS.page} ref={ref}>
      <h1 className={CSS.book_title}>{header} </h1>
      {/* <img src={img}  width='50%' height='auto' /> */}
      </div>
   )
}

   return (
       <div className={CSS.page} ref={ref}>
           
           <h1 className={CSS.page_title}>{header} </h1>
           {img &&  <img className={CSS.page_img}src={img} width='60px' height='60px'/>}
          
           <p className={CSS.page_text}>{text}</p>
           <p className={CSS.bottom_page}>Page number: {number}</p>
       </div>
   );
});

export default Page;