import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SwiperElement from "react-id-swiper"

import {
  content,
  paragraph,
  header,
  headerSmall,
} from "../styles/swiper.module.css"
import * as H from "../styled/Home/styles"

const mobile = window.innerWidth <= 1019

const params = {
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  loop: true,
  navigation: !mobile && {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}

const Swiper = () => {
  const data = useStaticQuery(query)

  return (
    <H.Wrapper>
      <SwiperElement {...params}>
        {mobile
          ? data.mobileImage.nodes.map((node, index) => {
              return (
                <H.HeroSlider key={index}>
                  <H.BackgroundImageCustom
                    fluid={node.childImageSharp.fluid}
                    alt="background image"
                    indexPage
                  />

                  <H.Content className={content}>
                    <H.Headers>
                      <H.Header className={header}>Gwarancja</H.Header>
                      <H.Header className={headerSmall}>satysfakcji</H.Header>
                    </H.Headers>

                    <H.Paragraph className={paragraph}>
                      Gwarantujemy pełną satysfkację z naszych usług, popartą
                      doświadczeniem oraz kompetencjami.
                    </H.Paragraph>
                  </H.Content>
                </H.HeroSlider>
              )
            })
          : data.desktopImage.nodes.map((node, index) => {
              return (
                <H.HeroSlider key={index}>
                  <H.BackgroundImageCustom
                    fluid={node.childImageSharp.fluid}
                    alt="background image"
                    indexPage
                  />

                  <H.Content className={content}>
                    <H.Headers>
                      <H.Header className={header}>Gwarancja</H.Header>
                      <H.Header className={headerSmall}>satysfakcji</H.Header>
                    </H.Headers>

                    <H.Paragraph className={paragraph}>
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
    desktopImage: allFile(
      filter: {
        dir: { regex: "/slider/" }
        relativePath: { regex: "/desktop/" }
      }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    mobileImage: allFile(
      filter: {
        dir: { regex: "/slider/" }
        relativePath: { regex: "/mobile/" }
      }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Swiper
