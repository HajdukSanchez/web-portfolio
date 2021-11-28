import React from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
import { HomeContainer } from './HomeStyle'
import { Container, Button, List, ProjectCard, Text, CertificateCard } from '@components'

const Home = () => {
  return (
    <HomeContainer>
      <Container
        title='front end developer'
        description='Frontend developer, lover of minimalist and styled design. I Love to
          work with new technologies as React JS, Styled components, Redux,
          among others.'
      >
        <Button Icon={VscGithubInverted} text='GitHub' modifier='github' />
        <Button Icon={FaLinkedin} text='LinkedIn' modifier='linkedIn' />
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
      <Container title='Certificates' description='Some of my experience...'>
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
