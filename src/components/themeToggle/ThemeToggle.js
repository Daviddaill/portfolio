import React from 'react';
import CSS from './themeToggle.module.css'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { useTheme } from '../../hooks/ThemeContext';
 
/*
  A simple component to togle from light to dark mode
*/
export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <div className={CSS.button}>
      < WiMoonAltFirstQuarter
        size='19px'
        onClick={toggleTheme}
        alt='toggle dark mode'
      />
    </div>
  );
}
