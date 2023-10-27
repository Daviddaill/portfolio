import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import CSS from './testimonials.module.css';

const Testimonial = ({ author, content }) => {
  return (
    <div className={CSS.testimonial}>
      <div className={CSS.testimonial_content}>
        <div className={CSS.quote_left}>
          <ImQuotesLeft size="20px" className='green_text' />
        </div>
        <div className={CSS.quote_content}>
          {content.map((paragraph, idx) => (
            <p key={idx} style={{ textIndent: '20px' }}>{paragraph} </p>
          ))}
        </div>
        <div className={CSS.quote_right}>
          <ImQuotesRight size="20px" className={`green_text ${CSS.right_quote}`} />
        </div>
      </div>
      <p className={`green_text ${CSS.testimonial_author}`}>- {author}</p>
    </div>
  );
};

export default Testimonial;
