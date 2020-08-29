import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SwiperElement from "react-id-swiper"

import { content } from "../styles/swiper.module.css"
import * as H from "../styled/Home/styles"

const params = {
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}

const Swiper = ({ indexPage }) => {
  const data = useStaticQuery(query)

  return (
    <H.Wrapper>
      <SwiperElement {...params}>
        {data.allFile.nodes.map((node, index) => {
          return (
            <H.HeroSlider key={index}>
              <H.BackgroundImageCustom
                fluid={node.childImageSharp.fluid}
                alt="background image"
                indexPage
              />

              <H.Content className={content}>
                <H.Headers>
                  <H.Header>Gwarancja</H.Header>
                  <H.Header small>satysfakcji</H.Header>
                </H.Headers>

                <H.Paragraph>
                  Gwarantujemy pełną satysfkację z naszych usług, popartą
                  doświadczeniem oraz kompetencjami.
                </H.Paragraph>
              </H.Content>
            </H.HeroSlider>
          )
        })}
      </SwiperElement>
    </H.Wrapper>
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
  }
`

export default Swiper
