import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

import * as J from "../styled/Offer/styles"
import { wrapper, item, dayClass, dateClass } from "../styles/offer.module.css"

const description = [
  {
    id: 1,
    desc: `
    Na tej stronie prezentujemy aktualny jadłospis, obowiązujący w danym okresie. Jadlospis pomija wszelakie wykluczenia
    indywidualne oraz zmiany wprowadzone na życzenie obsługiwanych placówek. Aby skontaktować się z naszą obsługą w celu
    złożenia zapytania dotyczącego jadłospisu - użyj formularza kontaktowego dostępnego na dole strony.
    `,
  },
]

const createDesc = desc => ({ __html: desc })

const MenuPage = ({
  data: {
    allDatoCmsMenu: { nodes },
  },
}) => {
  console.log(nodes)
  return (
    <Layout>
      <SEO title="Fitkids | jadłospis" />
      <Hero />
      <J.Wrapper className={wrapper}>
        <h2>Aktualny jadłospis</h2>
        <J.Descriptions>
          {description.map(({ id, desc }) => {
            return (
              <J.Desc key={id} dangerouslySetInnerHTML={createDesc(desc)} />
            )
          })}
        </J.Descriptions>
      </J.Wrapper>

      <J.Wrapper className={wrapper}>
        <ul>
          {nodes.map(({ day, breakfast, date, dinner, tea }) => {
            return (
              <li key={day}>
                <span className={dayClass}>{day}</span>
                <span className={dateClass}>- {date}</span>
                <ul className={item}>
                  <li>
                    <strong>Śniadanie:</strong>
                    {breakfast}
                  </li>
                  <li>
                    <strong>Obiad:</strong>
                    {dinner}
                  </li>
                  <li>
                    <strong>Podwieczorek:</strong>
                    {tea}
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
      </J.Wrapper>

      <Contact title="Formularz kontaktowy" fromMenuPage />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsMenu(sort: { fields: pos, order: ASC }) {
      nodes {
        breakfast
        date(formatString: "DD-MM-YYYY")
        day
        dinner
        tea
        pos
      }
    }
  }
`

export default MenuPage
