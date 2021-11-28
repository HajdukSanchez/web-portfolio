import React from 'react'
import { Card, BadgeContainer, ImageContainer, InformationContainer } from './CertificateCardStyle'
import { calculateMonthsBetweenDates } from '@utils/calculateDate.js'
import { CertificateCardProps } from '@types'

const CertificateCard = ({ badge, image, name, finishedDate }: CertificateCardProps) => {
  const months = calculateMonthsBetweenDates(finishedDate)

  return (
    <Card>
      <BadgeContainer>
        <img src={badge} alt={`Badge ${name}`} />
      </BadgeContainer>
      <ImageContainer>
        <img src={image} alt={`Certificate ${name}`} />
      </ImageContainer>
      <InformationContainer>
        <h1>{name}</h1>
        <i>{months} months ago</i>
      </InformationContainer>
    </Card>
  )
}

CertificateCard.defaultProps = {
  badge:
    'https://static.platzi.com/media/learningpath/badges/fc491fa0-c1ca-448b-8262-629406154dfc.jpg',
  image:
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-certificate-card-template-a93224c86d67512fb5eae17078f9cefa_screen.jpg?ts=1561537670',
  name: 'Certified test',
  finishedDate: new Date(),
}

export { CertificateCard }
