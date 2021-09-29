import React from 'react'
// * Components
import Description from './description/Description'
import Projects from './projects/Projects'
import Technologies from './technologies/Technologies'
// * Styles
import { Container } from './HomeStyles'

const Home = () => {
  return (
    <Container>
      <Description />
      <Projects />
      <Technologies />
    </Container>
  )
}

export default Home
