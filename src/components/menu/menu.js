import React from 'react';
import { Link } from 'react-router-dom';
//Style
import CSS from './menu.module.css';
// Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
//Component
import Settings from '../settings/Settings';
import SocialMedia from '../social_media/SocialMedia';
import Contact from '../contact/Contact';

const Menu = ({ closeMenu }) => {
  const { header, language } = useLanguageContent();
  const { home, about, projects, resume } = header.nav;

  return (
    <table className={CSS.menu_container}>
      <tbody>
        <tr>
          <td className={CSS.mainCol}>
            <div className={CSS.nav}>
              <Link to={`./${language}/home`} onClick={closeMenu} className={CSS.nav_link}>{home}</Link>
              <Link to={`./${language}/about`} onClick={closeMenu} className={CSS.nav_link}>{about}</Link>
              <Link to={`./${language}/projects`} onClick={closeMenu} className={CSS.nav_link}>{projects}</Link>
              <Link to={`./${language}/resume`} onClick={closeMenu} className={CSS.nav_link}>{resume}</Link>
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
          <td colSpan='2'>
            <Contact isHorizontal={true} />
          </td>
        </tr>
      </tbody>
    </table>
  )
};
 
export default Menu;
