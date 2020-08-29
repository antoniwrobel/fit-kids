import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

const OfferPage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | wiadomość wysłana" />
      <Hero />
      <h2>Dziękujemy za wysłanie wiadomości!</h2>
    </Layout>
  )
}

export default OfferPage
