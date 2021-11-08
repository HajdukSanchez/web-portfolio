import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscGithubInverted, VscColorMode, VscCode } from 'react-icons/vsc'
import { Container, Navigation, List, Item, HamburgerMenu } from './HeaderStyle'
import { Menu } from '@components'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu) // ? Toggle the value
  }

  return (
    <header>
      <Container>
        <div>
          <Link to='/'>logo</Link>
        </div>
        <Menu isOpen={showMenu} />
        <Navigation>
          <List>
            <Item border hidden>
              <Link to=''>cv</Link>
            </Item>
            <Item>
              <VscColorMode />
            </Item>
            <Item hidden>
              <a href='https://github.com/HajdukSanchez' target='_blank' rel='noopener noreferrer'>
                <VscGithubInverted />
              </a>
            </Item>
          </List>
        </Navigation>

        <HamburgerMenu onClick={() => handleMenu()} open={showMenu}>
          <VscCode />
        </HamburgerMenu>
      </Container>
    </header>
  )
}

export { Header }

// TODO: ADD LOCAL LOGO
// TODO: Add dark mode button functionality
