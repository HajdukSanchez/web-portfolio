import React from 'react'
import { ListContainer } from './ListStyle'
import { LinkButton } from '@components'
import { ListProps } from '@types'

const List = ({ children, isFullMode, url }: ListProps) => {
  return (
    <ListContainer>
      <ul>{children}</ul>
      {!isFullMode && <LinkButton text='View more' modifier='more' url={url} />}
    </ListContainer>
  )
}

List.defaultProps = {
  children: null,
  isFullMode: false,
  url: '#',
}

export { List }
