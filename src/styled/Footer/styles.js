import styled, { css } from "styled-components"

export const Wrapper = styled.footer`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: url(${({ bg }) => bg}) no-repeat;
    background-size: contain;
    z-index: 0;
    max-width: 720px;
    right: 0;
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
