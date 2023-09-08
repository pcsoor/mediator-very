import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{ children }</div>
      <Footer />
    </>
  )
}

export default layout
