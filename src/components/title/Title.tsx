import React from 'react'
import { TitleComponent } from './TitleStyles'

type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => <TitleComponent>{text}</TitleComponent>

Title.defaultProps = {
  text: 'This is a default title',
}

export { Title }
