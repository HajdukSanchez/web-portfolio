import React from 'react'
// * Slider
import Slider from 'react-slick'

const Slide = ({ slider, children }) => <Slider {...slider}>{children}</Slider>

export default Slide
