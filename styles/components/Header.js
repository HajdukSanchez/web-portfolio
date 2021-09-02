import styled, { css } from 'styled-components'

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
`

export const Navigator = styled.nav`
  display: flex;
`

export const NavigatorLinks = styled.nav`
  display: flex;
  ${(props) =>
    props.isHidden &&
    css`
      display: none;
    `}
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`

export const ListItem = styled.li`
  margin: 0 2rem;
  padding: 0 1.5rem;
  text-transform: capitalize;
  cursor: pointer;
  ${(props) =>
    props.isButton &&
    css`
      padding: 0.5rem 3rem;
      border: 1px solid black;
      border-radius: 6px;
    `}
  ${(props) =>
    props.isHidden &&
    css`
      display: none;
    `}
`

export const MenuHamb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`
