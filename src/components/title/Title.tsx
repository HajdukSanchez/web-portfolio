import React from 'react'
import { TitleComponent } from './TitleStyles'
import { TitleProps } from '@types'

const Title = ({ text }: TitleProps) => <TitleComponent>{text}</TitleComponent>

Title.defaultProps = {
  text: 'This is a default title',
}

export { Title }
