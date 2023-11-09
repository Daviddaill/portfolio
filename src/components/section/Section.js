import React from 'react'
import CSS from './section.module.css'

/*
Section only provide a simple style setting, so all section are the same
it is use the same way as a div tag but provide a set margin and gap 
*/
export default function Section({children}) {
  return (
    <div className={CSS.section}>
      {children}
    </div>
  )
}
 