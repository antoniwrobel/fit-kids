import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Image from "gatsby-image"

import {
  navbar,
  list,
  listItem,
  listHref,
  image,
} from "../styles/navbar.module.css"

const styles = {
  margin: "0 auto",
  maxWidth: "1250px",
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
    <li key={slug} className={listItem}>
      <Element to={slug} className={listHref}>
        {name}
      </Element>
    </li>
  )
}

const Navbar = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <Image
        className={image}
        fluid={data.file.childImageSharp.fluid}
        style={styles}
        alt="company logo"
        fadeIn={false}
      />
      <nav className={navbar}>
        <ul className={list}>{pages.map(handleNavPages)}</ul>
      </nav>
    </>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "belka_menu_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Navbar
