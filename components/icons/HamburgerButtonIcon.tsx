import React from 'react'

type Props = {}

const HamburgerButtonIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="height-[100%] width-[100%]"
    >
      <g>
        <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
      </g>
    </svg>
  )
}

export default HamburgerButtonIcon
