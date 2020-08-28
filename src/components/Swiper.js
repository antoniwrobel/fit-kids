import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as H from "../styled/Home/styles"

const Swiper = ({ indexPage }) => {
  const data = useStaticQuery(query)
  const handleRandomImgId = () => Math.floor(Math.random() * 5)

  const randomId = handleRandomImgId()

  const imgSrc = indexPage
    ? data.allFile.nodes[randomId].childImageSharp.fluid
    : data.file.childImageSharp.fluid

  return (
    <>
      {indexPage ? (
        <H.Wrapper>
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
        dir: { regex: "/slider/" }
        relativePath: { regex: "/desktop/" }
      }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    file(relativePath: { eq: "happy-kid.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Swiper
