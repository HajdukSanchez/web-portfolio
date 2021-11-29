import React from 'react'
import { Link } from 'react-router-dom'
import { ItemContainer } from './LinkItemStyle'
import { ItemProps } from '@types'

const LinkItem = ({ text, url }: ItemProps) => {
  return (
    <ItemContainer>
      <Link to={url}>{text}</Link>
    </ItemContainer>
  )
}

LinkItem.defaultProps = {
  text: '',
  url: '#',
}

export { LinkItem }
