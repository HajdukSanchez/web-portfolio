import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
`

export const NavigationMenu = styled.nav`
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
    props.open &&
    css`
      left: 0;
      opacity: 1;
    `}
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
`

export const ListMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  flex-direction: column;
  transform: translateY(-100%);
  transition: transform 0.7s, opacity 0.9s;
  opacity: 0;

  ${(props) =>
    props.open &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  flex-direction: row;
`

export const ItemMenu = styled.li`
  padding: 2rem 4rem;
  width: 100%;
  text-transform: uppercase;
  text-align: center;

  ${(props) =>
    props.border &&
    css`
      margin: 2rem 4rem;
      padding: 0.7rem;
      border: 1px solid #ad4226;
      border-radius: 6px;
      background-color: #f4ae95;
      cursor: pointer;

      & > a {
        color: #ad4226;
      }
    `}
`

export const Item = styled.li`
  margin: 0 2rem;
  padding: 0 1.5rem;
  text-transform: capitalize;
  cursor: pointer;

  ${(props) =>
    props.border &&
    css`
      padding: 0.7rem 3rem;
      border: 1px solid black;
      border-radius: 6px;
    `}

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}

  & > svg {
    fill: #fff;
  }
`

export const MenuHamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;

  & > svg {
    fill: white;
    transform: rotate(0deg);
    transition: 0.7s;

    ${(props) =>
      props.open &&
      css`
        transform: rotate(90deg);
      `}
  }
`
