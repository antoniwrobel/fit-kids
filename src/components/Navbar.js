import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import nav from "../images/belka_menu.png"
import logo from "../images/logo-kidsfit.png"

import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
      <img className="navbar-cover" src={nav} alt="navbar background" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="company logo" />
            </Link>
          </li>
          <li>
            <Link to="/oferta">oferta</Link>
          </li>
          <li>
            <AnchorLink to="/#o-firmie">o firmie</AnchorLink>
          </li>
          <li>
            <Link to="/jadlospis">jadłospis</Link>
          </li>
          <li>
            <Link to="/kontakt">kontakt</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
