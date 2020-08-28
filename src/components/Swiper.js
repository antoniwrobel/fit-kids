import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SwiperElement from "react-id-swiper"

import * as H from "../styled/Home/styles"

const params = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 600,
  spaceBetween: 0,
  effect: "slide",
  parallaxEl: {
    el: ".parallax-bg",
    value: "-23%",
  },
}

const Swiper = ({ indexPage }) => {
  const data = useStaticQuery(query)
  const handleRandomImgId = () => Math.floor(Math.random() * 5)

  const [parallaxSwiper, setParallaxSwiper] = useState(null)
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0
  const parallaxOpacity = 0.5

  const randomId = handleRandomImgId()

  const imgSrc = indexPage
    ? data.allFile.nodes[randomId].childImageSharp.fluid
    : data.file.childImageSharp.fluid

  return (
    <>
      {indexPage ? (
        <H.Wrapper>
          <SwiperElement {...params} getSwiper={setParallaxSwiper}>
            {data.allFile.nodes.map((node, index) => {
              return (
                <H.HeroSlider className="hero-slide" key={index}>
                  <H.SlideImg
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}
                    className="slide-image"
                  >
                    <H.BackgroundImageCustom
                      fluid={node.childImageSharp.fluid}
                      alt="background image"
                      className="parallax-bg"
                    />
                  </H.SlideImg>

                  <H.Content>
                    <H.Headers>
                      <H.Header>Gwarancja</H.Header>
                      <H.HeaderSmall>satysfakcji</H.HeaderSmall>
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
