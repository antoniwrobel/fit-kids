import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import belkaLogo from "../images/belka_menu_logo.png"

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

const Navbar = () => {
  return (
    <>
      <img src={belkaLogo} style={styles} alt="company logo" />
      <nav>
        <ul>
          {pages.map(({ anchorLink, name, slug }) => {
            if (anchorLink) {
              return (
                <li key={slug}>
                  <AnchorLink to={slug}>{name}</AnchorLink>
                </li>
              )
            }
            return (
              <li key={slug}>
                <Link to={slug}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
