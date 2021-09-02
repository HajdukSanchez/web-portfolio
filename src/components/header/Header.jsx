import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// * Styles
import {
  HeaderMenu,
  Navigator,
  NavigatorLinks,
  List,
  ListItem,
  MenuHamb,
} from '../../../styles/components/Header'
// * Icons
import { VscGithubInverted, VscColorMode, VscCode } from 'react-icons/vsc'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <header>
      <HeaderMenu>
        <div>
          <Link to='/'>logo</Link>
        </div>
        <NavigatorLinks isHidden isOpen={showMenu}>
          <List>
            <ListItem>
              <Link to='/about-me'>about me</Link>
            </ListItem>
            <ListItem>
              <Link to='/blog'>blog</Link>
            </ListItem>
            <ListItem>
              <Link to='/works'>works</Link>
            </ListItem>
            <ListItem>
              <Link to='/certificates'>certificates</Link>
            </ListItem>
          </List>
        </NavigatorLinks>
        <Navigator>
          <List>
            <ListItem isButton isHidden>
              <Link to=''>cv</Link>
            </ListItem>
            <ListItem>
              <VscColorMode />
            </ListItem>
            <ListItem>
              <a
                href='https://github.com/HajdukSanchez'
                target='_blank'
                rel='noopener noreferrer'
              >
                <VscGithubInverted />
              </a>
            </ListItem>
          </List>
        </Navigator>
        <MenuHamb>
          <VscCode style={{ fill: 'white' }} onClick={() => handleMenu()} />
        </MenuHamb>
      </HeaderMenu>
    </header>
  )
}

export default Header

// TODO: ADD LOCAL LOGO
// TODO: Add dark mode button functionality
