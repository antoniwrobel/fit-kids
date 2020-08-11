import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export const query = graphql`
  {
    allDatoCmsMenu(filter: { day: { eq: "Poniedziałek" } }) {
      nodes {
        breakfast
      }
    }
  }
`
