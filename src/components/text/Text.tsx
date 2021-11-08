import React from 'react'
import { TextComponent } from './TextStyles'

type TextProps = {
  text: string
}

const Text = ({ text }: TextProps) => <TextComponent>{text}</TextComponent>

Text.defaultProps = {
  text: 'Hello World',
}

export { Text }
