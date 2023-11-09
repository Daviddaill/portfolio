import React from 'react'
import { useLanguageContent } from '../../hooks/useLanguageContent';
import Testimonial from './Testimonial';
import CSS from './testimonials.module.css'
import { useTheme } from '../../hooks/ThemeContext';
 
/*
This component will automatically add all the testimonials available in the content file
*/
export default function Testimonials() {
   const {about, language} = useLanguageContent();
   const {darkMode}= useTheme();
   const theme= darkMode? CSS.dark: CSS.light;
   const title= language==='fr'? 'Témoignages': 'Testimonials';
   const testimonials= about.testimonials;
  return (
    <div className={`${theme} ${CSS.testimonials_container}`}>
      <h2 className={`green_text ${CSS.title}`}>{title}</h2>
      {testimonials.map((testimonial, idx) =>(
         <Testimonial key={idx} author={testimonial.author} content={testimonial.content}/>
      ))}
    </div>
  )
}
