import styled, { css } from 'styled-components'

export const ButtonContent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 70%;
  font-size: 1.4rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  color: white;

  & > span {
    margin-right: 1rem;
  }

  ${(props) =>
    props.modifier === 'github' &&
    css`
      background-color: #2b3137;
      border-color: #24292d;
      margin-bottom: 2rem;
    `}

  ${(props) =>
    props.modifier === 'linkedIn' &&
    css`
      background-color: #0077b5;
      border-color: #025783;
    `}
`
