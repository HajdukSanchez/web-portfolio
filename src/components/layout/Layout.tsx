import React from 'react'
import { Header } from '@components'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export { Layout }
