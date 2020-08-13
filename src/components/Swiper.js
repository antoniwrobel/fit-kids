import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as H from "../styled-components/Home/styles"

const colors = {
  1: "#fcc630",
  2: "#8ec1c4",
  3: "#e44762",
  4: "#f9ed82",
  5: "#7cb954",
}

const Swiper = ({ id }) => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <H.Wrapper bgColor={colors[id]}>
      <H.BackgroundImage
        fluid={data.allFile.nodes[id - 1].childImageSharp.fluid}
        alt="background image"
      />
    </H.Wrapper>
  )
}

const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "slider" }
        relativePath: { regex: "/desktop/" }
      }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Swiper
