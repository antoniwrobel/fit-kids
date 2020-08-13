import React from "react"

import Navbar from "../components/Navbar"

import "../../src/styles/reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
