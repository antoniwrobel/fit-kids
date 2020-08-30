import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"
import Swiper from "../components/Swiper"
import OurValues from "../components/OurValues"
import AboutUs from "../components/AboutUs"
import Area from "../components/Area"
import Recomendations from "../components/Recomendations"
import Gallery from "../components/Gallery"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | catering dla dzieci" swiper captcha />
      <Swiper />
      <OurValues />
      <AboutUs />
      <Area />
      <Recomendations />
      <Gallery />
      <ContactUs />
      <Footer />
    </Layout>
  )
}

export default HomePage
