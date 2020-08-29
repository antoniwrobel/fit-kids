import styled, { css } from "styled-components"
import Image from "gatsby-image"

export const Wrapper = styled.div`
  width: 100%;
`

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: ${({ indexPage }) => (indexPage ? "782px" : "450px")};
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
`

export const HeroSlider = styled.div``

export const Headers = styled.div``

export const HeaderSmall = styled.h3`
  font-family: Acme;
  font-size: 72px;
  font-weight: 400;
`

export const BackgroundImageCustom = styled(Image)`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
`

export const Content = styled.div``

export const Header = styled.h2`
  font-family: Acme;
  font-size: 72px;
  color: #fff;
  width: auto;
  height: auto;
  font-weight: 400;
  ${({ small }) =>
    small &&
    css`
      color: #22fef6;
      margin-left: 55px;
    `}
`

export const Paragraph = styled.p`
  font-size: 30px;
  color: #fff;
  margin-left: 55px;
  margin-top: 55px;
  line-height: 30px;
`
