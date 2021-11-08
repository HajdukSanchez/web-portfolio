import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { ListContainer, ListMoreButton } from './ListStyle'

type ListProps = {
  children: ReactElement
  isFullMode?: boolean
}

const List = ({ children, isFullMode }: ListProps) => {
  return (
    <ListContainer>
      <ul>{children}</ul>
      {!isFullMode && (
        <ListMoreButton>
          <Link to=''>
            View more
            <FaSearch />
          </Link>
        </ListMoreButton>
      )}
    </ListContainer>
  )
}

List.defaultProps = {
  children: null,
  isFullMode: false,
}

export { List }
