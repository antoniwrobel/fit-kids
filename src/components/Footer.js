import React from "react"

import * as F from "../styled/Footer/styles"
import { wrapper, container } from "../styles/footer.module.css"

const Footer = () => {
  return (
    <F.Wrapper className={wrapper}>
      <F.Container>Footer</F.Container>
    </F.Wrapper>
  )
}

export default Footer
