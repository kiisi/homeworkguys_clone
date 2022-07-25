import React from 'react'
import Header from './Header/Header'
import Request from './Request/Request'
import Testimony from './Testimony/Testimony'
import Chats from './Chats/Chats'

const Main = () => {
  return (
    <main className='max-wrapper'>
        <Header/>
        <Request/>
        <Testimony/>
        <Chats/>
    </main>
  )
}

export default Main