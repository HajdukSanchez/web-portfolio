import React from 'react'
import { Link } from 'react-router-dom'
// * Styles
import { Navigator, List, ListItem } from '../../../styles/components/Header'

const Header = () => {
  return (
    <header>
      <Navigator>
        <List>
          <ListItem>
            <Link to='/'>logo</Link>
          </ListItem>
          <ListItem>
            <Link to=''>about me</Link>
          </ListItem>
          <ListItem>
            <Link to=''>blog</Link>
          </ListItem>
          <ListItem>
            <Link to=''>works</Link>
          </ListItem>
          <ListItem>
            <Link to=''>studies</Link>
          </ListItem>
          <ListItem>
            <Link to=''>github</Link>
          </ListItem>
        </List>
      </Navigator>
    </header>
  )
}

export default Header

// TODO: ADD GITHUB AND LOCAL LOGOS
