import React from 'react'

export default function Paper({pageNumber}) {
 const page=  `p${pageNumber}`
const frontPage= `f${pageNumber}`
const backPage=`b${pageNumber}`

  return (
   <div  className={`${CSS.paper} ${page}`}>
   <div className={CSS.front}>
       <div  className={`${CSS.front_content} ${frontPage}`}>
           <h1>Front {pageNumber}</h1>
       </div>
   </div>
   <div className={CSS.back}>
       <div className={`${CSS.back_content} ${backPage}`}>
           <h1>Back {pageNumber}</h1>
       </div>
   </div>
</div>
  )
}
