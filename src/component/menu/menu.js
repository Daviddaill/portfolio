import React, { useState } from 'react';
import CSS from './menu.module.css';
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { Link, useParams } from 'react-router-dom';
import Settings from '../settings/Settings';
import SocialMedia from '../social_media/SocialMedia';
import Contact from '../contact/Contact';


const Menu = ({closeMenu}) => {
  const { header, language } = useLanguageContent();
  const { home, about, projects, resume } = header.nav;

  return (
      <table className={CSS.menu_container}>
        <tr>
          <td className={CSS.mainCol}>
            <div className={CSS.nav}>
              <Link to={`./${language}/home`} onClick={closeMenu}>{home}</Link>
              <Link to={`./${language}/about`} onClick={closeMenu}>{about}</Link>
              <Link to={`./${language}/projects`} onClick={closeMenu}>{projects}</Link>
              <Link to={`./${language}/resume`} onClick={closeMenu}>{resume}</Link>
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
  )
};

export default Menu;
