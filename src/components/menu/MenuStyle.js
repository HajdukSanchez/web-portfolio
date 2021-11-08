import styled, { css } from 'styled-components'

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #222831;
  transition: left 0.5s, opacity 0.7s;
  opacity: 0;

  ${(props) =>
    props.isOpen &&
    css`
      left: 0;
      opacity: 1;
    `}
`

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  flex-direction: column;
  transform: translateY(-100%);
  transition: transform 0.7s, opacity 0.9s;
  opacity: 0;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`
