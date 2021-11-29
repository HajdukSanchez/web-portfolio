import React from 'react'
import { Header, Footer } from '@components'
import { FooterProps } from '@types'

const Layout = ({ children }: FooterProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  children: <div>Layout children default</div>,
}

export { Layout }
