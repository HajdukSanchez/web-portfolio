import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonContent } from './ButtonStyle'

type ButtonProps = {
  Icon: React.ComponentType<{}>
  text: string
  modifier?: string
}

const Button = ({ Icon, text, modifier }: ButtonProps) => {
  return (
    <ButtonContent modifier={modifier}>
      <span>{text}</span>
      <Icon />
    </ButtonContent>
  )
}

export { Button }
