import React from 'react'
import { HomeContainer } from './HomeStyle'
import { Container, Button, List, ProjectCard, Text, CertificateCard } from '@components'
import { GitHub, LinkedIn } from '@utils/icons.js'

const Home = () => {
  return (
    <HomeContainer>
      <Container
        title='front end developer'
        description='Frontend developer, lover of minimalist and styled design. I Love to
          work with new technologies as React JS, Styled components, Redux,
          among others.'
      >
        <Button Icon={GitHub} text='GitHub' modifier='github' />
        <Button Icon={LinkedIn} text='LinkedIn' modifier='linkedIn' />
      </Container>
      <Container title='Projects' description='Some of my projects.'>
        <List>
          <ProjectCard />
          <ProjectCard />
        </List>
      </Container>
      <Container>
        <Text />
      </Container>
      <Container title='Certificates' description='Some of my experience.'>
        <List>
          <CertificateCard />
          <CertificateCard />
          <CertificateCard />
        </List>
      </Container>
    </HomeContainer>
  )
}

export { Home }
