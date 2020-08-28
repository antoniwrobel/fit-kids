import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import * as A from "../styled/AboutUs/styles"
import {
  wrapper,
  header,
  headerSmall,
  description as desc,
  content,
  image,
  lastContent,
} from "../styles/aboutUs.module.css"

const PINK = "#f67685"
const GREEN = "#87bb68"
const YELLOW = "#dea542"
const BLUE = "#08abff"

const articles = [
  {
    id: 1,
    title: "",
    alt: "kids reading",
    description: `Zamujemy się profesjonalnym żywieniem dzieci zarówno
  w wieku przedszkolnym jak i szkolnym. Swoją ofertę kierujemy
  do prywatnych oraz państwowych placówek oświatowych.
  Wszystkie wydawne przez nas posiłki przygotowane są według
  <span style="color:${PINK};">wewnętrznych, rygorystycznych standardów,</span> co pozwala
  nieprzerwanie zachować ich <span style="color:${GREEN}";>najwyższą jakość oraz świeżość.</span>
  Jesteśmy w stanie przygotować posiłki dla alergików - <span style="color:${PINK}";>do każdej 
  obsługiwanej placówki podchodzimy indywidualnie.</span> Posiłki 
  dostarczamy w specjalnie przeznaczonych do tego bemarach 
  termicznych, według ustalonego z kierownictwem placówki 
  harmonogramu. 
  <br/>
  <br/>
  Oprócz codziennego żywienia przedszkolaków i uczniów,
  zajmujemy się również organizacją imprez  dla najmłodszych
  - szczególnie ich cateringową częścią. 
  `,
  },
  {
    id: 2,
    title: "Nasza oferta",
    alt: "kids having fun",
    description: `Nasza oferta obejmuje dwa pakiety żywienia dostarczane
    codziennie do placówek oświatowych. Naszym klientom dajemy
    do wyboru pakiet dwu lub trzy posiłkowy. <span style="color:${YELLOW};">W przypadku pakietu
    3-posiłkowego dodajemy do zamówień gratisowe napoje dla
    każdego dziecka.</span>
    <br/>
  <br/>
    Szczegółowe warunki oferty, takie jak preferowane jadłospsy,
    harmonogramy dostaw, wykluczenia produktów oraz listę
    alergenów - uzgadniami indywidualnie z kierownictwem
    danej placówki. <span style="color:${BLUE};">Jesteśmy elastyczni i otwarci na propozycję,
    staramy się ograniczyć liczbę mogących pojawić się podczas
    współpracy problemów do minimum.</span> Zapoznaj się z naszą ofertą
    lub skontaktuj się z nami aby poznać szczegóły.`,
  },
]

const createDesc = desc => ({ __html: desc })

const AboutUs = () => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  console.log(nodes)
  return (
    <A.Wrapper className={wrapper} id="o-firmie">
      <A.Header className={header}>Fit Kids - catering dla dzieci</A.Header>
      <A.Articles>
        {articles.map(({ id, title, description, alt }, index) => {
          return (
            <A.Article key={id}>
              {title && (
                <A.HeaderSmall className={headerSmall}>{title}</A.HeaderSmall>
              )}
              <A.Content
                className={`${content} ${index === 1 ? lastContent : null}`}
              >
                <A.Description
                  dangerouslySetInnerHTML={createDesc(description)}
                  className={desc}
                />
                <Image
                  fluid={nodes[index].childImageSharp.fluid}
                  alt={alt}
                  className={image}
                />
              </A.Content>
            </A.Article>
          )
        })}
      </A.Articles>
    </A.Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/aboutUs/" } }, sort: { fields: name }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default AboutUs
