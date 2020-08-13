import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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

const Navbar = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <Image fluid={data.file.childImageSharp.fluid} style={styles} />
      <nav>
        <ul>
          <li>
            <Link to="/" />
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

const query = graphql`
  {
    file(relativePath: { eq: "belka_menu_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Navbar
