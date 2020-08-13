import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"
import Swiper from "../components/Swiper"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | catering dla dzieci" />
      <Swiper indexPage />
      <h1>Home</h1>
    </Layout>
  )
}

export default HomePage
