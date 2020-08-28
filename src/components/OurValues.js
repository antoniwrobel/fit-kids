import React from "react"
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

const createTitle = title => ({ __html: title })

const OurValues = () => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  return (
    <O.Wrapper className={wrapper}>
      {cards.map(({ title, borderColor, color, desc }, index) => {
        return (
          <O.Card key={nodes[index].id} className={card}>
            <O.BackgroundImage
              fixed={nodes[index].childImageSharp.fixed}
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
          fixed(width: 350, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
        id
      }
    }
  }
`

export default OurValues
