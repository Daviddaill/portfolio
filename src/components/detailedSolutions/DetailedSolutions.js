import React from 'react'
//coponent
import SectionTitle from '../sectionTitle/SectionTitle'
import Section from '../section/Section'
//style
import CSS from "./detailedSolutions.module.css"
import { useLanguageContent } from '../../hooks/useLanguageContent'
import { useTheme } from '../../hooks/ThemeContext'



export default function DetailedSolutions() {
   const { solutions, language } = useLanguageContent()
   const { theme } = useTheme();
   const { hotel, website, shop, custom } = solutions;

   const nav = [
      { slug: "website", name: website.title },
      { slug: "shop", name: shop.title },
      { slug: "hotel", name: hotel.title },
      { slug: "code", name: custom.title },
   ]

  return (
    <div>
        <Section id="website"  >
            <SectionTitle title={website.title} color="primary" bg_color={theme}> </SectionTitle>
            <p className={` ${CSS.section_description}`}>{website.description}</p>
            <div className={CSS.box_container}>
               <div className={`${CSS.box1} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{website.section1.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section1.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {website.section1.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section1.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {website.section1.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section1.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {website.section1.description3}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box2} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{website.section2.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section2.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {website.section2.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section2.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {website.section2.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section2.subtitle3}
                     </h4>
                  </div>
               </div>
               <div className={`${CSS.box3} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{website.section3.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section3.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {website.section3.description1}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box4} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{website.section4.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {website.section4.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {website.section4.description1}
                     </p>
                  </div>
               </div>
            </div>
         </Section>
         <Section id="shop"  >
            <SectionTitle title={shop.title} color="primary" bg_color={theme}> </SectionTitle>
            <p className={` ${CSS.section_description}`}>{shop.description}</p>
            <div className={CSS.box_container}>
               <div className={`${CSS.box1} ${CSS.box} ${CSS.hotel_container}`}>
                  <h3 className={`${CSS.box_title}`}>{hotel.section1.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section1.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description4}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box2} ${CSS.box} ${CSS.shop_container}`}>
                  <h3 className={`${CSS.box_title}`}>{shop.section2.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section2.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section2.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section2.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section2.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section2.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section2.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section2.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section2.description4}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box3} ${CSS.box} `}>
                  <h3 className={`${CSS.box_title}`}>{shop.section3.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section3.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section3.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section3.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section3.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section3.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section3.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section3.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section3.description4}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box4} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{shop.section4.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section4.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section4.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section4.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section4.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section4.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section4.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {shop.section4.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {shop.section4.description4}
                     </p>
                  </div>
               </div>
            </div>
         </Section>
         <Section id="hotel"  >
            <SectionTitle title={hotel.title} color="primary" bg_color={theme}> </SectionTitle>
            <p className={` ${CSS.section_description}`}>{hotel.description}</p>
            <div className={CSS.box_container}>
               <div className={`${CSS.box1} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{hotel.section1.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section1.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description4}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section1.subtitle5}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {hotel.section1.description5}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box2} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{hotel.section2.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section2.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section2.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section2.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section2.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section2.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section2.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section2.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section2.description4}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box3} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{hotel.section3.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section3.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section3.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section3.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section3.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section3.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section3.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section3.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section3.description4}
                     </p>

                  </div>
               </div>
               <div className={`${CSS.box4} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{hotel.section4.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section4.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section4.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section4.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section4.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section4.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section4.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {hotel.section4.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {hotel.section4.description4}
                     </p>
                  </div>
               </div>
            </div>
         </Section>
         <Section id="code"  >
            <SectionTitle title={custom.title} color="primary" bg_color={theme}> </SectionTitle>
            <p className={` ${CSS.section_description}`}>{custom.description}</p>
            <div className={CSS.box_container}>
               <div className={`${CSS.box1} ${CSS.box} ${CSS.hotel_container}`}>
                  <h3 className={`${CSS.box_title}`}>{custom.section1.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section1.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section1.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section1.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {custom.section1.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section1.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text} `}>
                        {custom.section1.description3}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box2} ${CSS.box} ${CSS.shop_container}`}>
                  <h3 className={`${CSS.box_title}`}>{custom.section2.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section2.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section2.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section2.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section2.description2}
                     </p>

                  </div>
               </div>
               <div className={`${CSS.box3} ${CSS.box} `}>
                  <h3 className={`${CSS.box_title}`}>{custom.section3.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     <p className={`${CSS.box_content_title}`}>
                        {custom.section3.description1}
                     </p>
                  </div>
               </div>
               <div className={`${CSS.box4} ${CSS.box}`}>
                  <h3 className={`${CSS.box_title}`}>{custom.section4.title}</h3>
                  <div className={`${CSS.box_content_container}`}>
                     {/* <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section4.subtitle1}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section4.description1}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section4.subtitle2}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section4.description2}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section4.subtitle3}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section4.description3}
                     </p>
                     <h4 className={`${CSS.box_content_title} primary`}>
                        {custom.section4.subtitle4}
                     </h4>
                     <p className={`${CSS.box_conntent_text}`}>
                        {custom.section4.description4}
                     </p> */}
                  </div>
               </div>
            </div>
         </Section>
    </div>
  )
}
