import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as O from "../styled/OurValues/styles"
import {
  wrapper,
  card,
  cardHeader,
  cardDesc,
} from "../styles/ourValues.module.css"

const cards = [
  {
    title: "Gwarancja <br/> świeżości",
    color: "#418518",
    borderColor: "#aaf97a",
    desc:
      "Wszystkie wydawane przez nas posiłki przygotowane są wyłącznie ze świeżych produktów",
  },
  {
    title: "Doświadczony <br/> personel",
    color: "#f67685",
    borderColor: "#f67685",
    desc: "Posiadamy kadrę wykfalifikowanych i doświadczonych pracowników.",
  },
  {
    title: "Elastyczność <br/> dostaw",
    color: "#79730c",
    borderColor: "#fff65e",
    desc: "Godziny dostaw ustalamy indywidualnie z każdym naszym klientem.",
  },
]

const OurValues = () => {
  const data = useStaticQuery(query)

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth <= 1019)
  }, [])

  const createTitle = title => ({
    __html: mobile ? title.replace("<br/>", "") : title,
  })

  const {
    allFile: { nodes },
  } = data

  return (
    <O.Wrapper className={wrapper}>
      {cards.map(({ title, borderColor, color, desc }, index) => {
        return (
          <O.Card key={nodes[index].id} className={card}>
            <O.BackgroundImage
              fluid={nodes[index].childImageSharp.fluid}
              alt={title}
              borderColor={borderColor}
            />
            <O.CardHearder
              color={color}
              className={cardHeader}
              dangerouslySetInnerHTML={createTitle(title)}
            />
            <O.CardDesc className={cardDesc}>{desc}</O.CardDesc>
          </O.Card>
        )
      })}
    </O.Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/ourValues/" } }, sort: { fields: name }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default OurValues
