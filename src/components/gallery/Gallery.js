import React, { useState, useEffect } from 'react';
//Style
import CSS from './gallery.module.css';
//Assets
import pho from '../../assets/images/projects/pho.png'
import gite from '../../assets/images/projects/booking.png'
import reddit from '../../assets/images/projects/reddit.png'


const images = [
  pho,
  gite,
  reddit,
];
 
/*
A gallery of project's screen shot to feature some of the project i worked on 
(top section of project page)
*/
function Gallery() {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
     }, 4000);
 
     return () => clearInterval(interval);
   }, []);
 
   return (
     <div className={CSS.gallery_container}>
           <img
             src={images[currentImageIndex]}
             alt={`projects display`}
             className={CSS.gallery_image}
           />
     </div>
   );
 }
 
 export default Gallery;
