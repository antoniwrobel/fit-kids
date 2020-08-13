import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Swiper from "../components/Swiper"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fitkids | kontakt" />
      <Swiper />
      <h1>Kontakt</h1>
    </Layout>
  )
}

export default ContactPage
