import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import CSS from './projects.module.css';

/*
- To add a new Category, create a new component and add HorizontalGallery and a array of projects Information
- HorizontalGallery will create a ProjectCard for each  element of the given array:
  Website, github and company are Optional and will not break if not given
 img, title, and text are mandatory. 

*/
const HorizontalGallery = ({ projects }) => {
  const containerRef = useRef(null);
 
  return (
    <div className={CSS.horizontal_gallery}>
      <div className={CSS.gallery_container} ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;
