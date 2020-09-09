import styled, { css } from "styled-components"

export const Wrapper = styled.footer``

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
