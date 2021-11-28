import styled from 'styled-components'

export const Card = styled.article`
  position: relative;
  margin-bottom: 4rem;
  border-radius: 0.6rem;
  width: 100%;
`

export const BadgeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  z-index: 10;

  & img {
    width: 100%;
    border-radius: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 100%;

  & img {
    width: 100%;
    border-radius: 0.6rem;
    object-fit: contain;
  }
`

export const InformationContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  padding-right: 2rem;
  padding-bottom: 2rem;
  color: gold;
  background-image: linear-gradient(to top, #151a22 -20%, transparent 90%);
  border-radius: 0.6rem;
  transition: all 0.5s;
  z-index: 1;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`
