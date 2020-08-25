import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

const MenuPage = ({
  data: {
    allDatoCmsMenu: { nodes: menu },
  },
}) => {
  console.log(menu)

  return (
    <Layout>
      <SEO title="Fitkids | jadłospis" />
      <Hero />
      <h1>Jadłospis</h1>
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
      }
    }
  }
`

export default MenuPage
