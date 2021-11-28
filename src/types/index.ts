import { ReactElement } from 'react'

export type ButtonProps = {
  Icon?: any
  text: string
  modifier?: string
}

export type CertificateCardProps = {
  badge: string
  image: string
  name: string
  finishedDate: string
}

export type ContainerType = {
  title: string
  description?: string
  children: ReactElement
  isHeaderInfo?: boolean
}

export type LinkButtonProps = {
  text: string
  url: string
  Icon?: any
  modifier: string
}

export type ListProps = {
  children: ReactElement
  isFullMode?: boolean
  url?: string
}

export type MenuProps = {
  isOpen: boolean
}

export type MenuItemProps = {
  text: string
  url: string
}

export type TechnologyProps = {
  name: string
}

export type ProjectCardProps = {
  image: string
  name: string
  description: string
  technologies: TechnologyProps[]
  documentationUrl: string
  projectUrl?: string
}

export type TextProps = {
  text: string
}

export type TitleProps = {
  text: string
}