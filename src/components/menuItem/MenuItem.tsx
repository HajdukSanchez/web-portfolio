import React from 'react'
import { Link } from 'react-router-dom'
import { MenuITemContainer } from './MenuItemStyle'

type MenuItemProps = {
  text: string
  url: string
}

const MenuItem = ({ text, url }: MenuItemProps) => {
  return (
    <MenuITemContainer>
      <Link to={url}>{text}</Link>
    </MenuITemContainer>
  )
}

MenuItem.defaultProps = {
  text: '',
  url: '#',
}

export { MenuItem }
