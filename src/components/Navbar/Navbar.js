import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'

const Navbar = () => {

  const mediaScreen = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      {
        mediaScreen ? <MobileNav/> : <DesktopNav/>
      }
    </>

  )
}

export default Navbar