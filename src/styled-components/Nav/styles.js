import styled from "styled-components"
import Image from "gatsby-image"

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1245px;
  color: #333;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const Img = styled.img`
  margin: 0 auto;
  max-width: 1245px;
  z-index: 1;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
`

export const Ul = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  z-index: 1;

  li:not(:first-of-type) {
    width: 15%;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #117598;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
  }

  li:first-of-type {
    width: 166px;
    height: 118px;
    margin: 0 auto;
    top: 30px;
    position: relative;
  }
`
