import styled, { css } from 'styled-components'

export const LinkComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 0.6rem;

  & > a {
    cursor: pointer;
  }

  ${(props) =>
    props.modifier === 'more' &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 40rem 0 2rem;
      z-index: 10;
      background-image: linear-gradient(to top, #151a22 7%, transparent 90%);

      & > a {
        padding: 1.5rem;
        width: 60%;
        background-color: #2b3137;
        border-radius: 0.6rem;

        & > svg {
          margin-left: 1rem;
        }
      }
    `}

  ${(props) =>
    props.modifier === 'cv' &&
    css`
      margin: 2rem 4rem;
      padding: 1rem;
      border: 1px solid #ad4226;
      background-color: #f4ae95;

      & > a {
        color: #ad4226;
      }
    `}
`
