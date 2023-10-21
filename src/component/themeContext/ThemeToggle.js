import React from 'react';
import { useTheme } from './ThemeContext';
import CSS from './themeToggle.module.css'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={CSS.button}>
      < WiMoonAltFirstQuarter
        size='1.5em'
        onClick={toggleTheme}
        alt='toggle dark mode'
      />
    </div>


  );
}
