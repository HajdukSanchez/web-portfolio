import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`
