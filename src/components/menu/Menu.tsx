import React from 'react'
import { MenuContainer, MenuList } from './MenuStyle'
import { LinkButton, MenuItem } from '@components'

type MenuProps = {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <MenuList isOpen={isOpen}>
        <MenuItem text='about me' url='/about-me' />
        <MenuItem text='blog' url='/blog' />
        <MenuItem text='project' url='/projects' />
        <MenuItem text='certificates' url='/certificates' />
        <LinkButton text='cv' modifier={'cv'} url='#' />
      </MenuList>
    </MenuContainer>
  )
}

Menu.defaultProps = {
  isOpen: false,
}

export { Menu }
