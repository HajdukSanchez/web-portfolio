import styled, { css } from 'styled-components'

export const Container = styled.section`
  margin: 4rem 0;
`

export const DescriptionContainer = styled.div`
  text-align: center;
  padding-bottom: 5rem;
`

export const Title = styled.h1`
  padding-bottom: 2rem;
  font-size: 4.8rem;
  text-transform: capitalize;
  line-height: 5rem;
  color: white;
`

export const Text = styled.p`
  font-size: 1.5rem;
  color: white;
`

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 2rem;
`

export const Social = styled.a`
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
    props.github &&
    css`
      background-color: #2b3137;
      border-color: #24292d;
      margin-bottom: 2rem;
    `}

  ${(props) =>
    props.linkedIn &&
    css`
      background-color: #0077b5;
      border-color: #025783;
    `}
`
