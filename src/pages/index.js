import React from "react"

import Layout from "./layout"

import * as H from "../styled-components/Home/styles.js"

const HomePage = ({
  data: {
    allFile: { nodes: sliderImages },
  },
}) => {
  return (
    <Layout>
      <H.Img
        fluid={sliderImages[7].childImageSharp.fluid}
        alt="background image"
        fadeIn
      />
    </Layout>
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

export default HomePage
