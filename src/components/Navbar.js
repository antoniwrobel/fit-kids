import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import * as N from "../styled-components/Nav/styles"

const Navbar = () => {
  const { nav, logo } = useStaticQuery(query)

  return (
    <>
      <N.Img fluid={nav.childImageSharp.fluid} alt="navbar background" fadeIn />
      <N.Nav>
        <N.Ul>
          <li>
            <Link to="/">
              <Image fluid={logo.childImageSharp.fluid} alt="company logo" />
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

// ...GatsbyImageSharpFixed
// ...GatsbyImageSharpFluid

export const query = graphql`
  query getImages {
    nav: file(relativePath: { eq: "belka_menu.png" }) {
      childImageSharp {
        fluid(maxWidth: 1245, maxHeight: 220) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "logo-kidsfit.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Navbar
