import React from 'react'
import {
  FooterComponent,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterCopyContainer,
  FooterCopyright,
} from './FooterStyle'
import { LinkItem } from '@components'
import { GitHub, LinkedIn, Mail, Twitter, Platzi } from '@utils/icons.js'

const Footer = () => {
  return (
    <FooterComponent>
      <FooterTitle>Get in touch</FooterTitle>
      <FooterList>
        <li>
          <FooterListItem href='#' target='_blank' github>
            <GitHub />
          </FooterListItem>
        </li>
        <li>
          <FooterListItem href='#' target='_blank' linkedin>
            <LinkedIn />
          </FooterListItem>
        </li>
        <li>
          <FooterListItem href='#' target='_blank' twitter>
            <Twitter />
          </FooterListItem>
        </li>
        <li>
          <FooterListItem href='#' target='_blank' mail>
            <Mail />
          </FooterListItem>
        </li>
        <li>
          <FooterListItem href='#' target='_blank' platzi>
            <Platzi />
          </FooterListItem>
        </li>
      </FooterList>
      <FooterList isVertical>
        <LinkItem text='about me' url='/about-me' />
        <LinkItem text='project' url='/projects' />
        <LinkItem text='certificates' url='/certificates' />
      </FooterList>
      <FooterCopyContainer>
        <figure>
          <img src='' alt='logo' />
        </figure>
        <FooterCopyright>
          Hajduk S&aacute;nchez &copy; {new Date().getFullYear()}. All rights reserved.
        </FooterCopyright>
      </FooterCopyContainer>
    </FooterComponent>
  )
}

export { Footer }

// TODO: Add urls to the footer links
