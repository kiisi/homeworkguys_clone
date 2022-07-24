import React from 'react'
import ScrollUp from './ScrollUp/ScrollUp'
import { useMediaQuery } from 'react-responsive'
import MinorContactUs from './MinorContactUs/MinorContactUs'


const Minor = () => {
  const mediaScreen = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
        {mediaScreen && <ScrollUp/>}
        <MinorContactUs/>
    </>
  )
}

export default Minor