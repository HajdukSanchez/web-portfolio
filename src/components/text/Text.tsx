import React from 'react'
import { TextComponent } from './TextStyles'
import { TextProps } from '@types'

const Text = ({ text }: TextProps) => <TextComponent>{text}</TextComponent>

Text.defaultProps = {
  text: 'Hello World',
}

export { Text }
