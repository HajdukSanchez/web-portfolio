import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CgArrowLongRight } from 'react-icons/cg'
import {
  ProjectContainer,
  Container,
  Name,
  Description,
  Technologies,
  Technology,
  Links,
  Link,
} from './ProjectCardStyle'

type TechnologyProps = {
  name: string
}

type ProjectCardProps = {
  image: string
  name: string
  description: string
  technologies: TechnologyProps[]
  documentationUrl: string
  projectUrl?: string
}

const ProjectCard = ({
  image,
  name,
  description,
  technologies,
  projectUrl,
  documentationUrl,
}: ProjectCardProps) => {
  return (
    <ProjectContainer>
      <Container>
        <img src={image} alt={name} />
      </Container>
      <Container description>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Technologies>
          {technologies.map((technology) => (
            <Technology key={technology.name}>{technology.name}</Technology>
          ))}
        </Technologies>
        <Links>
          <Link href={documentationUrl} target='_blank' rel='noopener noreferrer' animation>
            <span>Documentation</span>
            <CgArrowLongRight />
          </Link>
          <Link href={projectUrl} target='_blank' rel='noopener noreferrer' sourceLink>
            <BsBoxArrowUpRight />
          </Link>
        </Links>
      </Container>
    </ProjectContainer>
  )
}

ProjectCard.defaultProps = {
  image:
    'https://leonidasesteban.com/_next/image?url=https%3A%2F%2Fplatform-api-production.s3.amazonaws.com%2Fprojects%2Fthumbs%2F74c82106-6796-4db6-9ed9-68955ad21dad%2FThumbnail-hero.jpg&w=1920&q=75',
  name: 'Project',
  description: 'Example of Project card',
  technologies: [{ name: 'html' }, { name: 'css' }, { name: 'javascript' }],
  documentationUrl: '#',
  projectUrl: '#',
}

export { ProjectCard }
