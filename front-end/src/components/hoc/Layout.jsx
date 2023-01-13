import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ScrollUp from '../scrollup/ScrollUp'

const Layout = (props) => {
  return (
    <div>
        <Header />
        {props.children}
        <Footer />
        <ScrollUp />
    </div>
  )
}

export default Layout