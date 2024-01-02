import React from 'react'
import CSS from "./sectionTitle.module.css"


export default function SectionTitle({color, bg_color, title}) {

   return (
      <div className={CSS.title_container}>
         <h2 className={`${color} ${CSS.title} ${bg_color} ${CSS.themeMode}`}>{title}</h2>
      </div>

   )
}
