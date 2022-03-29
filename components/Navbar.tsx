import React from 'react'
import IconButton from './buttons/IconButton'
import BellIcon from './icons/BellIcon'
import HamburgerButtonIcon from './icons/HamburgerButtonIcon'
import MicIcon from './icons/MicIcon'
import SearchIcon from './icons/SearchIcon'
import VideoUploadIcon from './icons/VideoUploadIcon'
import YoutubeLogoIcon from './icons/YoutubeLogoIcon'
import YoutubeModeSelectionsIcon from './icons/YoutubeModeSelectionsIcon'

export default function Navbar() {
  return (
    <div className="main-nav align-center flex justify-between py-3 px-3">
      <div className="align-center flex justify-between">
        <IconButton icon={<HamburgerButtonIcon />} />
        <IconButton icon={<YoutubeLogoIcon />} />
      </div>
      <div className="align-center flex justify-between">
        <input
          type="search"
          className="hidden w-full appearance-none rounded-sm border-[1px] border-gray-300 py-1 px-4 leading-normal focus:border-blue-500 focus:outline-none sm:block"
          name=""
          id=""
        />
        <IconButton icon={<SearchIcon />} />
        <IconButton icon={<MicIcon />} />
      </div>
      <div className="align-center flex justify-between">
        <IconButton icon={<VideoUploadIcon />} />
        <IconButton icon={<YoutubeModeSelectionsIcon />} />
        <IconButton icon={<BellIcon />} />
      </div>
    </div>
  )
}
