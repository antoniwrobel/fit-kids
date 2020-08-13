import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as H from "../styled-components/Home/styles"

const Swiper = () => {
  const data = useStaticQuery(query)

  return (
    <H.Wrapper>
      <H.BackgroundImage fluid={data.allFile.nodes[8].childImageSharp.fluid} />
    </H.Wrapper>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "slider" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Swiper
