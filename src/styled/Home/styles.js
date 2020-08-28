import styled from "styled-components"
import BackgroundImg from "gatsby-image"

export const Wrapper = styled.div`
  width: 100%;
`

export const BackgroundImage = styled(BackgroundImg)`
  width: 100%;
  height: 782px;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
`

export const SlideImg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroSlider = styled.div`
  height: 780px !important;
  display: flex;
  position: relative;
  overflow: hidden;
`

export const Headers = styled.div``

export const HeaderSmall = styled.h3`
  font-family: Acme;
  font-size: 72px;
  color: #22fef6;
  margin-left: 55px;
  font-weight: 400;
`

export const BackgroundImageCustom = styled(BackgroundImg)`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
`

export const Content = styled.div`
  position: absolute;
  top: 255px;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  left: 0;
  right: 35%;
  margin: 0 auto;
`

export const Header = styled.h1`
  font-family: Acme;
  font-size: 72px;
  color: #fff;
  width: auto;
  height: auto;
  font-weight: 400;
`

export const Paragraph = styled.p`
  font-size: 30px;
  color: #fff;
  margin-left: 55px;
  margin-top: 55px;
  line-height: 30px;
`
