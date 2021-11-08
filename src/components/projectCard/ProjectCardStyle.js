import styled, { css, keyframes } from 'styled-components'

const MoveLeftToRight = keyframes`
  0% {
    transform: translateX(0px)
  }
  25% {
    transform: translateX(-2px)
  }
  50% {
    transform: translateX(0px)
  }
  75% {
    transform: translateX(2px)
  }
  100% {
    transform: translateX(0px)
  }
`

export const ProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  border: 1px solid black;
  border-color: #24292d;
  border-radius: 6px;
`

export const Container = styled.div`
  width: 100%;
  height: 40%;
  max-height: 50%;

  & > img {
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    object-fit: none;
  }

  ${(props) =>
    props.description &&
    css`
      padding: 1rem;
    `}
`

export const Name = styled.h3`
  padding: 1rem 0;
  color: white;
  font-size: 1.6rem;
`

export const Description = styled.p`
  font-size: 1.3rem;
  color: white;
`

export const Technologies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.5rem 0 1rem;
`

export const Technology = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.8rem 1.5rem;
  color: white;
  background: #2b3137;
  border-radius: 0.6rem;
  text-transform: uppercase;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`

export const Link = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  font-size: 1.2rem;

  & > svg {
    font-size: 2rem;
  }

  ${(props) =>
    props.animation &&
    css`
      & > svg {
        margin-left: 1rem;
        animation: ${MoveLeftToRight} 1.5s linear infinite;
      }
    `}

  ${(props) =>
    props.sourceLink &&
    css`
      justify-content: end;
      width: 20%;
      font-size: 1.6rem;
    `}
`
