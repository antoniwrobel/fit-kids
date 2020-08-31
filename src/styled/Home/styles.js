import styled from "styled-components"
import Image from "gatsby-image"

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div``

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: ${({ indexPage }) => (indexPage ? "782px" : "450px")};
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
`

export const HeroSlider = styled.div`
  min-height: 780px !important;
`

export const Headers = styled.div``

export const Header = styled.div``

export const BackgroundImageCustom = styled(Image)`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
  min-height: 780px;
`

export const Content = styled.div``

export const Paragraph = styled.p``
