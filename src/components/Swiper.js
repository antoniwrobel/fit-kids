import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SwiperElement from "react-id-swiper"

import {
  content,
  paragraph,
  header,
  headerSmall,
  bgImgCustom,
} from "../styles/swiper.module.css"
import * as H from "../styled/Home/styles"

const slogan = [
  [
    {
      first: "Pełen",
      second: "profesjonalizm",
      desc:
        "Doświadczenie naszych pracowników sprawia, że współpraca z nami to czysta przyjemność.",
    },
  ],
  [
    {
      first: "Najlepszy catering",
      second: "dla najmłodszych",
      desc:
        "Dostarczamy zdrowe i smaczne posiłki do żłobków, przedszkoli oraz szkół na terenie Łukowa i okolic.",
    },
  ],
  [
    {
      first: "Zdrowie",
      second: "przede wszystkim",
      desc:
        "Przykładamy dużą wagę do tego, aby wydawane przez nas posiłki przygotowywane były wyłącznie ze świeżych produktów.",
    },
  ],
  [
    {
      first: "Gwarancja",
      second: "satysfakcji",
      desc:
        "Gwarantujemy pełną satysfakcję z naszych usług, popartą doświadczeniem oraz kompetencjami.",
    },
  ],
  [
    {
      first: "Darmowe napoje",
      second: "do posiłków",
      desc:
        "Do każdego posiłku dodajemy w gratisie napój, zgodnie z ustalonym menu.",
    },
  ],
  [{ first: "", second: "", desc: "" }],
]

const Swiper = () => {
  const [mobile, setMobile] = useState(false)
  const [params, setParams] = useState({})

  useEffect(() => {
    setMobile(window.innerWidth <= 1019)
  }, [])

  useEffect(() => {
    setParams({
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
    })
  }, [mobile])

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
                    className={bgImgCustom}
                  />

                  <H.Content className={content}>
                    <H.Headers>
                      <H.Header className={header}>
                        {slogan[index][0].first}
                      </H.Header>
                      <H.Header className={headerSmall}>
                        {slogan[index][0].second}
                      </H.Header>
                    </H.Headers>

                    <H.Paragraph className={paragraph}>
                      {slogan[index][0].desc}
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
                    className={bgImgCustom}
                  />

                  <H.Content className={content}>
                    <H.Headers>
                      <H.Header className={header}>
                        {slogan[index][0].first}
                      </H.Header>
                      <H.Header className={headerSmall}>
                        {slogan[index][0].second}
                      </H.Header>
                    </H.Headers>

                    <H.Paragraph className={paragraph}>
                      {slogan[index][0].desc}
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
          fluid(quality: 80, maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Swiper
