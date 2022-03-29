import Seo from '../Seo'
import React from 'react'
import Header from '../Header'

interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Seo pageTitle={pageTitle} />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
