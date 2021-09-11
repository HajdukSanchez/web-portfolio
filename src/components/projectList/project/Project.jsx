import React from 'react'
// * Icons
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CgArrowLongRight } from 'react-icons/cg'
// * Styles
import {
  ProjectContainer,
  Container,
  Name,
  Description,
  Technologies,
  Technology,
  Links,
  Link,
} from './ProjectStyles'

const Project = () => {
  return (
    <ProjectContainer>
      <Container>
        <img
          src='https://leonidasesteban.com/_next/image?url=https%3A%2F%2Fplatform-api-production.s3.amazonaws.com%2Fprojects%2Fthumbs%2F74c82106-6796-4db6-9ed9-68955ad21dad%2FThumbnail-hero.jpg&w=1920&q=75'
          alt='Project image'
        />
      </Container>
      <Container description>
        <Name>Nombre proyecto</Name>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          harum!
        </Description>
        <Technologies>
          <Technology>html</Technology>
          <Technology>css</Technology>
          <Technology>javascript</Technology>
          <Technology>html</Technology>
          <Technology>css</Technology>
          <Technology>javascript</Technology>
          <Technology>html</Technology>
          <Technology>css</Technology>
          <Technology>javascript</Technology>
        </Technologies>
        <Links>
          <Link href='http://' target='_blank' rel='noopener noreferrer'>
            <span>Documentation</span>
            <CgArrowLongRight />
          </Link>
          <Link
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
            sourceLink
          >
            <BsBoxArrowUpRight />
          </Link>
        </Links>
      </Container>
    </ProjectContainer>
  )
}

export default Project
