import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md';
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';
import CSS from './nextPage.module.css';

export default function NextPage({ link, pageName, onClick }) {
  const { language } = useLanguageContent();
  const { darkMode } = useTheme();
  const theme = darkMode ? CSS.dark : CSS.light;
  const title = language === 'fr' ? 'Continuer vers ' : 'Continue to ';

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <div className={`${theme} ${CSS.container}`}>
      <Link to={`/${language}/${link}`} className={CSS.link} onClick={onClick}>
        <p>
          {title} {pageName}
        </p>
        <MdNavigateNext size='50px' className={CSS.icon} />
      </Link>
    </div>
  );
}
