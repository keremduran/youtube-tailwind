import React from 'react'
import Navbar from './Navbar'
import CategoriesBar from './CategoriesBar'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <Navbar />
      <CategoriesBar />
    </>
  )
}

export default Header
