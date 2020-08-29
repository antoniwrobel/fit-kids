import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import * as H from "../styled/Home/styles"

const Hero = () => {
  const data = useStaticQuery(query)

  return (
    <H.BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      alt="background image"
    />
  )
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
