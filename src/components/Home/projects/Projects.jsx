import React from 'react'
import { Link } from 'react-router-dom'
// * Components
import { ProjectList } from '../../'
// * Styles
import { Title } from './ProjectsStyles'

const Projects = () => {
  return (
    <section>
      <Title>Projects</Title>
      <div>
        <ProjectList />
      </div>
      <div>
        <Link>View more</Link>
      </div>
    </section>
  )
}

export default Projects
