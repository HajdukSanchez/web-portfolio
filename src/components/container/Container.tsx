import React from 'react'
import { Contain, Description, ChildContainer } from './ContainerStyle'
import { Text, Title } from '@components'
import { ContainerType } from '@types'

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
