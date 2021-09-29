import React from 'react'
// * Components
import Technology from '../technology/Technology'
import { Slide } from '../../'
// * Styles
import { Container } from './TechnologiesStyles'

const Technologies = () => {
  const sliderTop = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  }

  const sliderBottom = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  }

  const data = [
    {
      id: '1',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '2',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '3',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '4',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '5',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '6',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '7',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '8',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '9',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
    {
      id: '10',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      link: '/',
    },
  ]

  return (
    <Container>
      <Slide slider={sliderTop} style={{ margin: '2rem 0' }}>
        {data.map((item) => (
          <Technology id={item.id} {...item} />
        ))}
      </Slide>
      <Slide slider={sliderBottom}>
        {data.map((item) => (
          <Technology id={item.id} {...item} />
        ))}
      </Slide>
    </Container>
  )
}

export default Technologies
