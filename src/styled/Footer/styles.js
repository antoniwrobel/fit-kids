import styled, { css } from "styled-components"

export const Wrapper = styled.footer`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    // background: url(${({ bg }) => bg}) no-repeat;
    background: #207587;
    background-size: cover;
    z-index: 0;
    max-width: 40%;
    right: 0;
    border-radius: 70px 0px 0px 70px;
  }
`

export const Container = styled.div``

export const ColumnsWrapper = styled.div``

export const Column = styled.div`
  ${({ custom }) =>
    custom &&
    css`
      div {
        p {
          color: #fff;
        }
        span {
          color: #acfcee;
        }
      }
    `}
`
