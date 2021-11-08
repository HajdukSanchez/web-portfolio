import React, { ReactElement } from 'react'
import { FaSearch } from 'react-icons/fa'
import { ListContainer } from './ListStyle'
import { LinkButton } from '@components'

type ListProps = {
  children: ReactElement
  isFullMode?: boolean
  url?: string
}

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
