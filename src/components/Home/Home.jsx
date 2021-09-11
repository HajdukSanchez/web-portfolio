import React from 'react'
// * Components
import Description from './description/Description'
import Projects from './projects/Projects'
// * Styles
import { Container } from './HomeStyles'

const Home = () => {
  return (
    <Container>
      <Description />
      <Projects />
    </Container>
  )
}

export default Home
