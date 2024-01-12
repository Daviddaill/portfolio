import React from 'react'
import CSS from "./solution.module.css"
import Section from '../../components/section/Section'
import { useLanguageContent } from '../../hooks/useLanguageContent'
import { useTheme } from '../../hooks/ThemeContext'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import NextPage from '../../components/nextPage/NextPage'
import PageTitle from '../../components/pageTitle/PageTitle'
import { Helmet } from 'react-helmet'
import DetailedSolutions from '../../components/detailedSolutions/DetailedSolutions'

export default function Solutions() {
   const { solutions, language } = useLanguageContent()
   const { theme } = useTheme();
   const nextPage = language === 'fr' ? 'Projets Récents' : 'Recent Projects'
   const { hotel, website, shop, custom } = solutions;

   const nav = [
      { slug: "website", name: website.title },
      { slug: "shop", name: shop.title },
      { slug: "hotel", name: hotel.title },
      { slug: "code", name: custom.title },
   ]
   const { title, description } = solutions.meta;

   return (
      <div className={`${theme} `}>
         <Helmet>
            <title>{title} </title>
            <meta name="description" content={description}></meta>
         </Helmet>
         <PageTitle
            title={solutions.title}
            subtitle={solutions.subtitle}
            description={solutions.description}
            nav={nav}
         />
         <Section>
            <DetailedSolutions />
         </Section>
         <Section>
            <NextPage link='projects' pageName={nextPage} />
         </Section>

      </div>
   )
}
