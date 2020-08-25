import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as H from "../styled/Home/styles"

const Hero = ({ indexPage }) => {
  const data = useStaticQuery(query)

  const imgSrc = data.file.childImageSharp.fluid

  return <H.BackgroundImageCustom fluid={imgSrc} alt="background image" />
}

const query = graphql`
  {
    file(relativePath: { eq: "happy-kid.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
