import React from 'react'
import { useLanguageContent } from '../../hooks/useLanguageContent';
import Testimonial from './Testimonial';
import CSS from './testimonials.module.css'
import { useTheme } from '../../hooks/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';
import SectionTitle from '../sectionTitle/SectionTitle';
 
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
    <div className={`${theme} ${CSS.testimonials_container} bg_color2 `}>
      <SectionTitle title={title} color="tertiary" bg_color="bg_color2" />
      <Carousel className={CSS.carousel} >

      {testimonials.map((testimonial, idx) =>(
             <Carousel.Item className={CSS.carousel_item} >
              <div className={`carousel-content ${CSS.carousel_item_container}`}>
             <Testimonial key={idx} author={testimonial.author} content={testimonial.content}/>
             </div>
           </Carousel.Item>
         
      ))}
      </Carousel>
    </div>
  )
}
