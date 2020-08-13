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

const Swiper = ({ id, indexPage }) => {
  const data = useStaticQuery(query)

  const imgSrc = indexPage
    ? data.allFile.nodes[id - 1].childImageSharp.fluid
    : data.file.childImageSharp.fluid

  return (
    <>
      {indexPage ? (
        <H.Wrapper bgColor={colors[id]}>
          <H.BackgroundImage fluid={imgSrc} alt="background image" />
        </H.Wrapper>
      ) : (
        <H.BackgroundImageCustom fluid={imgSrc} alt="background image" />
      )}
    </>
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
    file(relativePath: { eq: "happy-kid.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90, webpQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Swiper
