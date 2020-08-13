import styled from "styled-components"
import BackgroundImg from "gatsby-image"

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
`

export const BackgroundImage = styled(BackgroundImg)`
  width: 100%;
  height: 782px;
  max-width: 1600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  margin: 0 auto;
`
