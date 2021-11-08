import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  flex-direction: row;
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

export const HamburgerMenu = styled.div`
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
