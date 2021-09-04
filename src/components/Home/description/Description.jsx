import React from 'react'
// * Icons
import { VscGithubInverted } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
// * Styles
import {
  Container,
  DescriptionContainer,
  Title,
  Text,
  Socials,
  Social,
} from '../../../../styles/components/home/description/Description'

const Description = () => {
  return (
    <Container>
      <DescriptionContainer>
        <Title>front end developer</Title>
        <Text>
          Frontend developer, lover of minimalist and styled design. I Love to
          work with new technologies as React JS, Styled components, Redux,
          among others.
        </Text>
      </DescriptionContainer>
      <Socials>
        <Social github>
          <span>Github</span>
          <VscGithubInverted />
        </Social>
        <Social linkedIn>
          <span>LinkedIn</span>
          <FaLinkedin />
        </Social>
      </Socials>
    </Container>
  )
}

export default Description
