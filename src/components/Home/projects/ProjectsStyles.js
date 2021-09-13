import styled, { keyframes } from 'styled-components'

const MoveTopToBottom = keyframes`
  0% {
    transform: translateY(0px)
  }
  25% {
    transform: translateY(-2px)
  }
  50% {
    transform: translateY(0px)
  }
  75% {
    transform: translateY(2px)
  }
  100% {
    transform: translateY(0px)
  }
`

export const Container = styled.section`
  position: relative;
  margin: 0 0 4rem;
  max-height: 1250px;
  overflow: hidden;
  border-radius: 0.6rem;
`

export const Title = styled.h2`
  padding-bottom: 4rem;
  color: white;
  font-size: 3.5rem;
  text-align: center;
`

export const More = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0 2rem;
  width: 100%;
  text-align: center;
  z-index: 10;
  background-image: linear-gradient(to top, #ffffff66 50%, transparent 90%);

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 60%;
    background-color: #2b3137;
    border-radius: 0.6rem;
    font-size: 1.4rem;

    & > svg {
      margin-left: 1rem;
      animation: ${MoveTopToBottom} 2.5s linear infinite;
    }
  }
`
