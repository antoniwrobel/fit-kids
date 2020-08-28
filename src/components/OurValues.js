import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as O from "../styled/OurValues/styles"

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
    <O.Wrapper>
      {cards.map(({ title, borderColor, color, desc }, index) => {
        return (
          <O.Card key={nodes[index].id}>
            <O.BackgroundImage
              fluid={nodes[index].childImageSharp.fluid}
              alt={title}
              borderColor={borderColor}
            />
            <O.CardHearder
              color={color}
              dangerouslySetInnerHTML={createTitle(title)}
            />
            <O.CardDesc>{desc}</O.CardDesc>
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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default OurValues
