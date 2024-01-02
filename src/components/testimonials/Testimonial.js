import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import CSS from './testimonials.module.css';
import { useTheme } from '../../hooks/ThemeContext';

 
/*
A single testimonial component, used by Testimonials, 
New testimonials are automatically added from the content file by Testimonials.
*/
const Testimonial = ({ author, content }) => {
  const {darkMode}= useTheme();
  const theme= darkMode? CSS.dark: CSS.light;
  return (
    <div className={CSS.testimonial}>
      <div className={`${CSS.testimonial_content} ${CSS.theme} `}>
        <div className={`${CSS.quote_left} tertiary`}>
          <ImQuotesLeft size="40px" className='tertiary' />
        </div>
        <div className={CSS.quote_content}>
          {content.map((paragraph, idx) => (
            <p key={idx} style={{ textIndent: '20px' }}>{paragraph} </p>
          ))}
        </div>

      </div>
      <p className={`tertiary ${CSS.testimonial_author}`}>- {author}</p>
    </div>
  );
};

export default Testimonial;
