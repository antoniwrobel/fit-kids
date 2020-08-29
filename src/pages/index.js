import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"
import Swiper from "../components/Swiper"
import OurValues from "../components/OurValues"
import AboutUs from "../components/AboutUs"
import Area from "../components/Area"
import Recomendations from "../components/Recomendations"
import Gallery from "../components/Gallery"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | catering dla dzieci" swiper />
      <Swiper />
      <OurValues />
      <AboutUs />
      <Area />
      <Recomendations />
      <Gallery />
    </Layout>
  )
}

export default HomePage
