import React from 'react';
import ProjectCard from './ProjectCard';
import CSS from './projects.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap

/*
- To add a new Category, create a new component and add HorizontalGallery and a array of projects Information
- HorizontalGallery will create a ProjectCard for each  element of the given array:
  Website, github and company are Optional and will not break if not given
 img, title, and text are mandatory. 

*/
const HorizontalGallery = ({ projects, className, variant,GalleryTitle }) => {
 
  return (
      <div className={`${className} ${CSS.caroussel}`}>
       <h2 className={CSS.projects_title}>{GalleryTitle}</h2>
      
      <Carousel variant={variant} as="div" pause="hover" wrap="true" >     
        {projects.map((project, index) => (
          <Carousel.Item className={CSS.carousel_item} interval={10000}>
            <ProjectCard key={index} {...project}   />
          </Carousel.Item> 
        )
        )}
      </Carousel>
      </div>
    );
  };


export default HorizontalGallery;
