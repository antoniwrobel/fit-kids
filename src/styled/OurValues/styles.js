import styled from "styled-components"
import BackgroundImg from "gatsby-image"

export const Wrapper = styled.div`
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -95px;
  border-radius: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 3px solid #efeeee;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

export const BackgroundImage = styled(BackgroundImg)`
  width: 100%;
  border-radius: 30px;
  border-top: 15px solid ${({ borderColor }) => borderColor};
`

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(100% / 3 - 20px);
  flex-direction: column;
  align-items: center;
`

export const CardHearder = styled.h3`
  font-size: 40px;
  color: ${({ color }) => color};
  font-weight: 700;
  text-align: center;
  margin: 15px 0;
`

export const CardDesc = styled.p`
  color: #504f4f;
  font-size: 22px;
  padding: 0 20px;
  text-align: center;
  letter-spacing: -0.88px;
  line-height: 22px;
`
