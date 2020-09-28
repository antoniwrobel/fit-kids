import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SwiperElement from "react-id-swiper"

import SwiperCore, { Thumbs, Navigation, Pagination } from "swiper"

import { Swiper as SWP, SwiperSlide } from "swiper/react"

import {
  content,
  paragraph,
  header,
  headerSmall,
  bgImgCustom,
  mainWrapper,
} from "../styles/swiper.module.css"
import * as H from "../styled/Home/styles"

import "swiper/swiper-bundle.css"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

SwiperCore.use([Navigation])

const slogan = [
  [
    {
      first: "Zdrowie",
      second: "przede wszystkim",
      color: "#482249",
      desc:
        "Przykładamy dużą wagę do tego, aby wydawane przez nas posiłki przygotowywane były wyłącznie ze świeżych produktów.",
    },
  ],
  [
    {
      first: "Gwarancja",
      second: "satysfakcji",
      color: "#21fef5",
      desc:
        "Gwarantujemy pełną satysfakcję z naszych usług, popartą doświadczeniem oraz kompetencjami.",
    },
  ],
  [
    {
      first: "Pelen",
      second: "profesjonalizm",
      color: "#971e51",
      desc:
        "Doświadczenie naszych pracowników sprawia, że współpraca z nami to czysta przyjemność.",
    },
  ],
  [
    {
      first: "Darmowe napoje",
      second: "do posilkow",
      color: "#1b569c",
      desc:
        "Do każdego posiłku dodajemy w gratisie napój, zgodnie z ustalonym menu.",
    },
  ],
  [
    {
      first: "Najlepszy catering",
      second: "dla najmlodszych",
      color: "#9d1c2e",
      desc:
        "Dostarczamy zdrowe i smaczne posiłki do żłobków, przedszkoli oraz szkół na terenie Łukowa i okolic.",
    },
  ],
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
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }, [mobile])

  const data = useStaticQuery(query)

  if (!Object.keys(params).length > 0) return <div className={mainWrapper} />

  return (
    <div className={mainWrapper}>
      <SWP {...params} navigation>
        {mobile
          ? data.mobileImage.nodes.map((node, index) => {
              return (
                <SwiperSlide key={index}>
                  <H.HeroSlider>
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
                        <H.Header
                          className={headerSmall}
                          color={slogan[index][0].color}
                        >
                          {slogan[index][0].second}
                        </H.Header>
                      </H.Headers>

                      <H.Paragraph className={paragraph}>
                        {slogan[index][0].desc}
                      </H.Paragraph>
                    </H.Content>
                  </H.HeroSlider>
                </SwiperSlide>
              )
            })
          : data.desktopImage.nodes.map((node, index) => {
              return (
                <SwiperSlide key={index}>
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
                      <H.Header
                        className={headerSmall}
                        color={slogan[index][0].color}
                      >
                        {slogan[index][0].second}
                      </H.Header>
                    </H.Headers>

                    <H.Paragraph className={paragraph}>
                      {slogan[index][0].desc}
                    </H.Paragraph>
                  </H.Content>
                </SwiperSlide>
              )
            })}
      </SWP>
    </div>
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
