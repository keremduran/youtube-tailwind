import React from 'react'
import Image from 'next/image'
interface Props {
  children?: React.ReactChild
  icon?: JSX.Element
}

const IconButton: React.FC<Props> = ({ children, icon }) => {
  return <a className="mr-2 flex cursor-pointer">{icon}</a>
}

export default IconButton
