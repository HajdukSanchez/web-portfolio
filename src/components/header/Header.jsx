import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// * Icons
import { VscGithubInverted, VscColorMode, VscCode } from 'react-icons/vsc'
// * Styles
import {
  Container,
  Navigation,
  NavigationMenu,
  List,
  ListMenu,
  Item,
  ItemMenu,
  MenuHamburger,
} from '../../../styles/components/header/Header'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu) // Toggle the value
  }

  return (
    <header>
      <Container>
        <div>
          <Link to='/'>logo</Link>
        </div>
        <NavigationMenu open={showMenu}>
          <ListMenu open={showMenu}>
            <ItemMenu>
              <Link to='/about-me'>about me</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to='/blog'>blog</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to='/works'>works</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to='/certificates'>certificates</Link>
            </ItemMenu>
            <ItemMenu border>
              <Link to=''>cv</Link>
            </ItemMenu>
          </ListMenu>
        </NavigationMenu>
        <Navigation>
          <List>
            <Item border hidden>
              <Link to=''>cv</Link>
            </Item>
            <Item>
              <VscColorMode />
            </Item>
            <Item hidden>
              <a
                href='https://github.com/HajdukSanchez'
                target='_blank'
                rel='noopener noreferrer'
              >
                <VscGithubInverted />
              </a>
            </Item>
          </List>
        </Navigation>
        <MenuHamburger onClick={() => handleMenu()} open={showMenu}>
          <VscCode />
        </MenuHamburger>
      </Container>
    </header>
  )
}

export default Header

// TODO: ADD LOCAL LOGO
// TODO: Add dark mode button functionality
