import React from 'react'
import { ButtonContent } from './ButtonStyle'
import { ButtonProps } from '@types'

const Button = ({ Icon, text, modifier }: ButtonProps) => {
  return (
    <ButtonContent modifier={modifier}>
      <span>{text}</span>
      <Icon />
    </ButtonContent>
  )
}

Button.defaultProps = {
  Icon: '',
  text: '',
  modifier: '',
}

export { Button }
