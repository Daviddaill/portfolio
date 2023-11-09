import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
//Style
import CSS from './header.module.css'
//Components
import Settings from '../settings/Settings';
import Menu from '../menu/menu';
// Images link
import logo from '../../assets/images/logo/d-high-resolution-logo-color-on-transparent-background.png'
//Custom Hooks
import { useLanguageContent } from '../../hooks/useLanguageContent';
import { useTheme } from '../../hooks/ThemeContext';
//Icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
 
function Header() {
   //Managed content and language
   const { header, language } = useLanguageContent();
   //Manage Style and theme
   const { darkMode, theme } = useTheme();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   //Manage Menu Visibility (small screen only)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      isMenuOpen ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
   };
   const closeMenu = () => {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto'
   };
   //Handle stye when header is scrolled
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

   //  *** Define class names for dark mode, scroll state and menu ****
   // header class name:
   const scrollClass = scrolled ? CSS.header_scrolled : darkMode? CSS.header_dark_init :CSS.header_init ;

   let headerMenu = '';
   if (isMenuOpen && darkMode) {
      headerMenu = CSS.dark_headerMenu
   } else if (isMenuOpen) {
      headerMenu = CSS.headerMenu
   }
   // combine header classNames
   const headerClassName = `${CSS.header} ${scrollClass} ${theme} ${headerMenu} `
   // Menu classNames:
   const menuOpen = isMenuOpen ? CSS.menu_open : CSS.menu_close;
   const darkMenu = darkMode ? CSS.darkMenu : CSS.lightMenu;
   // Combine menu class names
   const menu = `${menuOpen} ${darkMenu}`;
   //  *** End Define class names for dark mode, scroll state and menu ****

   return (
      <header className={headerClassName} >
         {/* LOGO */}
         <div className={CSS.nav_bar}>
            <div className={CSS.logoContainer}>
               <img src={logo} alt='logo David' width='25' height='25'></img>
               <h1 className={CSS.name}> </h1>
            </div>
            {/* NAV BAR ****BIG SCREEN*** */}
            <nav className={CSS.nav}>
               <NavLink
                  to={`${language}/home`}
                  className={({ isActive }) => isActive ? `${CSS.isActive} ` : CSS.isInactive}
                  >
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

            {/* Menu Icon ****SMALL SCREENS**** */}
            <div
               className={`${CSS.menu_icon} `}
               onClick={toggleMenu}
            >
               {isMenuOpen ? (
                  <AiOutlineClose size={24} />
               ) : (
                  <AiOutlineMenu size={24} />
               )}
            </div>
         </div>
         {/* Dropdown Menu */}
         <div className={`${menu} ${CSS.menu_container}`}>
            <Menu closeMenu={closeMenu} />
         </div>

      </header>
   )
}

export default Header;