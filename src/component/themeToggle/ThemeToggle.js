import React from 'react';
import CSS from './themeToggle.module.css'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { useTheme } from '../../hooks/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

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
