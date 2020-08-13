import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import logo from "../images/belka_menu_logo.png"

import "../styles/navbar.css"

const styles = {
  margin: "0 auto",
  maxWidth: "1245px",
  zIndex: 1,
  width: "100%",
  position: "absolute",
  left: 0,
  right: 0,
}

const pages = [
  { name: "", slug: "/" },
  { name: "oferta", slug: "/oferta" },
  { name: "o firmie", slug: "/#o-firmie", anchorLink: true },
  { name: "jadłospis", slug: "/jadlospis" },
  { name: "kontakt", slug: "/kontakt" },
]

const handleNavPages = ({ anchorLink, name, slug }) => {
  const Element = anchorLink ? AnchorLink : Link

  return (
    <li key={slug}>
      <Element to={slug}>{name}</Element>
    </li>
  )
}

const Navbar = () => {
  return (
    <>
      <img src={logo} style={styles} alt="company logo" />
      <nav>
        <ul>{pages.map(handleNavPages)}</ul>
      </nav>
    </>
  )
}

export default Navbar
