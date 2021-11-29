import styled, { css } from 'styled-components'

export const FooterComponent = styled.footer`
  padding: 4rem 1.5rem;
  background-color: #222831;
`
export const FooterTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
  color: white;
`
export const FooterList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;

  ${(props) =>
    props.isVertical &&
    css`
      flex-direction: column;
    `}
`
export const FooterCopyContainer = styled.div`
  padding: 2rem 0 0;
`

export const FooterCopyright = styled.h5`
  padding: 1rem 0 0;
  color: gray;
  font-size: 1.1rem;
  font-weight: 400;
`

export const FooterListItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: white;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 0.4rem;
  transition: 0.5s;

  &:hover {
    ${(props) =>
      props.github
        ? css`
            background-color: #2b3137;
          `
        : props.linkedin
        ? css`
            background-color: #0077b5;
          `
        : props.twitter
        ? css`
            background-color: #00acee;
          `
        : props.mail
        ? css`
            background-color: #c4382c;
          `
        : props.platzi &&
          css`
            background-color: #98ca3f;
          `}
  }
`
