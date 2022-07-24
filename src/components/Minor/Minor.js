import React from 'react'
import ScrollUp from './ScrollUp/ScrollUp'
import { useMediaQuery } from 'react-responsive'


const Minor = () => {
  const mediaScreen = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
        {mediaScreen ? <ScrollUp/> : ''}
    </>
  )
}

export default Minor