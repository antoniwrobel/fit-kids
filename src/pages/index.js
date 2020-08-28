import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"
import Swiper from "../components/Swiper"
import OurValues from "../components/OurValues"
import AboutUs from "../components/AboutUs"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | catering dla dzieci" />
      <Swiper indexPage />
      <OurValues />
      <AboutUs />
    </Layout>
  )
}

export default HomePage
