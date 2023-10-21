import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
//Style
import CSS from './header.module.css'
//Components
import Settings from '../settings/Settings';
import Menu from '../menu/menu';
// Images link
import logo from '../../assets/images/logo/d-high-resolution-logo-color-on-transparent-background.png'
//Custom Hooks
import { useLanguageContent } from '../../assets/content/useLanguageContent';
import { useTheme } from '../themeContext/ThemeContext';
//Icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
   //change style when header is scrolled
   const [scrolled, setScrolled] = useState(false);
   //Managed language
   const { lang } = useParams();
   const language = lang || 'en';
   const { header } = useLanguageContent();
   //manage Style and theme
   const { darkMode } = useTheme();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate(); // Initialize useNavigate

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   useEffect(() => {
      // Add scroll event listener and update 'scrolled' state
      const handleScroll = () => {
         if (window.scrollY > 70) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };
      window.addEventListener('scroll', handleScroll);
      // Remove event listener when component unmounts
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // Define class names for dark mode, scroll state and menu
   const darkModeClass = darkMode ? CSS.dark_mode : CSS.light_mode;
   const scrollClass = scrolled ? CSS.header_scrolled : CSS.header;
   const menuOpen = isMenuOpen ? CSS.menu_open : CSS.menu_close;
   const darkMenu = darkMode ? CSS.darkMenu : CSS.lightMenu;
   const menu = `${menuOpen} ${darkMenu}`;
   let headerMenu = '';
   if (isMenuOpen && darkMode) {
      headerMenu = CSS.dark_headerMenu
   } else if (isMenuOpen) {
      headerMenu = CSS.headerMenu
   }
  // Combine the header class name
   const headerClassName = `${CSS.header} ${scrollClass} ${darkModeClass} ${headerMenu} `

   return (
      <header className={headerClassName} >
         {/* LOGO */}
         <div className={CSS.logoContainer}>
            <img src={logo} alt='logo David' width='30' height='30'></img>
            <h1 className={CSS.name}>  Portfolio</h1>
         </div>
         {/* NAV BAR ****BIG SCREEN*** */}
         <nav className={CSS.nav}>
            <NavLink
               to={`${language}/home`}
               className={({ isActive }) => isActive ? CSS.isActive : CSS.isInactive}>
               {header.nav.home}
            </NavLink>
            <NavLink
               to={`${language}/about`}
               className={({ isActive }) => isActive ? CSS.isActive : CSS.isInactive}>
               {header.nav.about}
            </NavLink>
            <NavLink
               to={`${language}/projects`}
               className={({ isActive }) => isActive ? CSS.isActive : CSS.isInactive}>
               {header.nav.projects}
            </NavLink>
            <NavLink
               to={`${language}/resume`}
               className={({ isActive }) => isActive ? CSS.isActive : CSS.isInactive}
            >
               {header.nav.resume}
            </NavLink>
         </nav>
         {/* SETTINGS  ***BIG SCREEN*** */}
         <div className={CSS.settings}>
            <Settings position='header' />
         </div>

         {/* DROPDOWN MENU ****SMALL SCREENS**** */}
         {/* Menu Icon */}
         <div
            className={`${CSS.menu_icon} `}
            onClick={toggleMenu}
         >
            {isMenuOpen ? (
               <AiOutlineClose size={24}  />
            ) : (
               <AiOutlineMenu size={24}  />
            )}
         </div>
         {/* Dropdown Menu */}
         <div className={menu}>
            <Menu />
         </div>

      </header>
   )
}

export default Header;