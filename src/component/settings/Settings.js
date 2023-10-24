import React from 'react'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Language from '../language/Language'
import CSS from './setting.module.css'

export default function Settings({position, isvertical}) {
 const vertical= isvertical? CSS.vertical: '';
  return (
    <div className={`${CSS.settings_container} ${vertical}`}>
         <ThemeToggle />
         <Language position={position}/>
    </div>
  )
}
