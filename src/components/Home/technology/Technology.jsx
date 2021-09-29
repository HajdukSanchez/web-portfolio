import React from 'react'
// * Styles
import { Image } from './TechnologyStyles'

const Technology = ({ src, link }) => {
  return (
    <div>
      <a href={link}>
        <Image src={src} />
      </a>
    </div>
  )
}

export default Technology
