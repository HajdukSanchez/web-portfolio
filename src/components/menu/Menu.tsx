import React from 'react'
import { MenuContainer, MenuList } from './MenuStyle'
import { LinkButton, LinkItem } from '@components'
import { MenuProps } from '@types'

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <MenuList isOpen={isOpen}>
        <LinkItem text='about me' url='/about-me' />
        <LinkItem text='project' url='/projects' />
        <LinkItem text='certificates' url='/certificates' />
        <LinkButton text='cv' modifier={'cv'} url='#' />
      </MenuList>
    </MenuContainer>
  )
}

Menu.defaultProps = {
  isOpen: false,
}

export { Menu }
