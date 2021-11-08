import styled from 'styled-components'

export const ListContainer = styled.div`
  position: relative;
  max-height: 1600px;
  overflow: hidden;
  border-radius: 0.6rem;
`

export const ListMoreButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40rem 0 2rem;
  width: 100%;
  text-align: center;
  z-index: 10;
  background-image: linear-gradient(to top, #151a22 7%, transparent 90%);

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
    }
  }
`
