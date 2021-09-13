import React from 'react'
import { Link } from 'react-router-dom'
// * Icons
import { FaSearch } from 'react-icons/fa'
// * Components
import { ProjectList } from '../../'
// * Styles
import { Container, Title, More } from './ProjectsStyles'

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <div>
        <ProjectList />
      </div>
      <More>
        <Link>
          View more
          <FaSearch />
        </Link>
      </More>
    </Container>
  )
}

export default Projects
