import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import nav from "../images/belka_menu.png"
import logo from "../images/logo-kidsfit.png"

import * as N from "../styled-components/Nav/styles"

const Navbar = () => {
  return (
    <>
      <N.Img src={nav} alt="navbar background" />
      <N.Nav>
        <N.Ul>
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
        </N.Ul>
      </N.Nav>
    </>
  )
}

export default Navbar
