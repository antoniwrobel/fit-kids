import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as H from "../styled-components/Home/styles"

const Swiper = () => {
  const data = useStaticQuery(query)

  return (
    <H.Img
      fluid={data.allFile.nodes[7].childImageSharp.fluid}
      alt="background image"
      fadeIn
    />
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "slider" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Swiper
