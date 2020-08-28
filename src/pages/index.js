import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"
import Swiper from "../components/Swiper"
import OurValues from "../components/OurValues"
import AboutUs from "../components/AboutUs"
import Area from "../components/Area"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | catering dla dzieci" />
      <Swiper indexPage />
      <OurValues />
      <AboutUs />
      <Area />
    </Layout>
  )
}

export default HomePage
