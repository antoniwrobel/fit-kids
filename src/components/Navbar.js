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

const handleNavPages = ({ anchorLink, name, slug, img }) => {
  const Element = anchorLink ? AnchorLink : Link

  return (
    <li key={slug} className={listItem}>
      {img && <Image fixed={img} alt="company logo" fadeIn={false} />}
      <Element to={slug} className={listHref}>
        {name}
      </Element>
    </li>
  )
}

const Navbar = () => {
  const data = useStaticQuery(query)
  const pages = [
    { name: "", slug: "/", img: data.logo.childImageSharp.fixed },
    { name: "oferta", slug: "/oferta" },
    { name: "o firmie", slug: "/#o-firmie", anchorLink: true },
    { name: "jadłospis", slug: "/jadlospis" },
    { name: "kontakt", slug: "/kontakt" },
  ]

  return (
    <>
      <Image
        className={image}
        fluid={data.belka.childImageSharp.fluid}
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
    belka: file(relativePath: { eq: "belka-menu.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    logo: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fixed(width: 166, height: 118) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Navbar
