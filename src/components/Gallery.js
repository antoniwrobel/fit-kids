import React from "react"

import { wrapper, header } from "../styles/gallery.module.css"
import * as G from "../styled/Gallery/styles"

const Gallery = () => {
  return (
    <G.Wrapper className={wrapper}>
      <G.Header className={header}>Galeria naszych posiłków</G.Header>
    </G.Wrapper>
  )
}

export default Gallery
