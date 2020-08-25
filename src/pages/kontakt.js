import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Fitkids | kontakt" />
      <Hero />
      <h1>Kontakt</h1>
    </Layout>
  )
}

export default ContactPage
