import React from 'react'
import { Link } from 'react-router-dom'
import { LinkComponent } from './LinkButtonStyle'
import { LinkButtonProps } from '@types'


const LinkButton = ({ url, text, Icon, modifier }: LinkButtonProps) => {
  return (
    <LinkComponent modifier={modifier}>
      <Link to={url}>
        {text}
        {/* <Icon /> */}
      </Link>
    </LinkComponent>
  )
}

LinkButton.defaultProps = {
  Icon: '',
  text: 'Link test',
  url: '#',
}

export { LinkButton }
