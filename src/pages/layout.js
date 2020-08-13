import React from "react"

import Navbar from "../components/Navbar"
import SEO from "../components/Seo"

import "../../src/styles/reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
