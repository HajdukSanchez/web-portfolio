import React, { ReactElement } from 'react'
import { Contain, Description, ChildContainer } from './ContainerStyle'
import { Text, Title } from '@components'

type ContainerType = {
  title: string
  description?: string
  children: ReactElement
  isHeaderInfo?: boolean
}

const Container = ({ title, description, children, isHeaderInfo }: ContainerType) => {
  return (
    <Contain>
      <Description>
        <Title text={title} />
        <Text text={description} />
      </Description>
      <ChildContainer>{children}</ChildContainer>
    </Contain>
  )
}

Container.defaultProps = {
  title: '',
  description: '',
  children: null,
  isHeaderInfo: false,
}

export { Container }
