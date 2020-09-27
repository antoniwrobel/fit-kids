import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

import * as J from "../styled/Offer/styles"
import {
  wrapper,
  wrapperUpper,
  item,
  dayClass,
  center,
  headerWrap,
  wrapperSpecial,
  dateClass,
  desc as descClass,
} from "../styles/offer.module.css"

import notes from "../images/notes.png"

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
  return (
    <Layout>
      <SEO title="Fitkids | jadłospis" />
      <Hero />

      <div className={headerWrap}>
        <J.Wrapper className={wrapperUpper}>
          <h2>Aktualny jadłospis</h2>
          <J.Descriptions>
            {description.map(({ id, desc }) => {
              return (
                <J.Desc
                  key={id}
                  dangerouslySetInnerHTML={createDesc(desc)}
                  className={descClass}
                />
              )
            })}
          </J.Descriptions>
        </J.Wrapper>
        <J.Wrapper className={wrapperSpecial}>
          <img src={notes} alt="notes" style={{ maxWidth: "220px" }} />
        </J.Wrapper>
      </div>

      <J.Wrapper className={wrapper}>
        <ul>
          {nodes.map(({ day, breakfast, date, dinner, tea }) => {
            return (
              <li key={day}>
                <div className={center}>
                  <span className={dayClass}>{day}</span>
                  <span className={dateClass}>- {date}</span>
                </div>
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
