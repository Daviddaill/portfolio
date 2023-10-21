import React, { useState } from 'react';
import CSS from './menu.module.css';
//Custom Hooks
import { useLanguageContent } from '../../assets/content/useLanguageContent';
import { useTheme } from '../themeContext/ThemeContext';
import { Link, useParams } from 'react-router-dom';
import ThemeToggle from '../themeContext/ThemeToggle';
import Settings from '../settings/Settings';
import SocialMedia from '../social_media/SocialMedia';
import Contact from '../contact/Contact';


const Menu = () => {
  const { header } = useLanguageContent();
  const { home, about, projects, resume } = header.nav;
  const { lang } = useParams();
  const language = lang || 'en';

  return (
    <div className={CSS.menu_container}>
      <table>
        <tr>
          <td className={CSS.mainCol}>
            <div className={CSS.nav}>
              <Link to={`./${language}/home`}>{home}</Link>
              <Link to={`./${language}/home`}>{about}</Link>
              <Link to={`./${language}/home`}>{projects}</Link>
              <Link to={`./${language}/home`}>{resume}</Link>
            </div>
              
          </td>
          <td className={CSS.side}>
            <div className={CSS.settings}>
            <Settings isvertical={true} />
            </div>
            <div className={CSS.social_media}>
              <SocialMedia isVertical={true} />
            </div>
          </td>
        </tr>
        <tr className={CSS.bottom}>
          <td colspan='2'>
            <Contact isHorizontal={true}/>
          </td>
        </tr>

      </table>

    </div>
  )
};

export default Menu;
