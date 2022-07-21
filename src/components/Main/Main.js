import React from 'react'
import Header from './Header/Header'
import Request from './Request/Request'
import Testimony from './Testimony/Testimoney'

const Main = () => {
  return (
    <main className='max-wrapper'>
        <Header/>
        <Request/>
        <Testimony/>
    </main>
  )
}

export default Main