import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

import Area from "../components/Area"
import Recomendations from "../components/Recomendations"
import Gallery from "../components/Gallery"
import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

import PackageOptions from "../components/PackageOptions"
import * as O from "../styled/Offer/styles"
import { wrapper } from "../styles/offer.module.css"

const YELLOW = "#dea542"
const BLUE = "#08abff"

const description = [
  {
    id: 1,
    desc: `
      Nasza oferta obejmuje dwa pakiety żywienia dostarczane codziennie do placówek oświatowych. Naszym klientom dajemy do wyboru pakiet dwu lub trzy posiłkowy. <span style="color:${YELLOW};">W przypadku pakietu 3-posiłkowego dodajemy do zamówień gratisowe napoje dla każdego dziecka.</span>
    `,
  },
  {
    id: 2,
    desc: `
      Szczegółowe warunki oferty, takie jak preferowane jadłospsy, harmonogramy dostaw, wykluczenia produktów oraz listę alergenów - uzgadniami indywidualnie z kierownictwem danej placówki. <span style="color:${BLUE};">Jesteśmy elastyczni i otwarci na propozycję, staramy się ograniczyć liczbę mogących pojawić się podczas współpracy problemów do minimum.</span> Zapoznaj się z naszą ofertą lub skontaktuj się z nami aby poznać szczegóły.
    `,
  },
]

const createDesc = desc => ({ __html: desc })

const OfferPage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | oferta" swiper />
      <Hero />
      <O.Wrapper className={wrapper}>
        <h2>Oferta cateringowa</h2>
        <O.Descriptions>
          {description.map(({ id, desc }) => {
            return (
              <O.Desc key={id} dangerouslySetInnerHTML={createDesc(desc)} />
            )
          })}
        </O.Descriptions>
      </O.Wrapper>
      <PackageOptions />

      <Area fromOffer />
      <Recomendations />
      <Gallery />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default OfferPage
