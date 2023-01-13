import React from 'react'
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Qualification from '../qualification/Qualification';
import Skills from '../skills/Skills';

const HomeLayout = () => {
  return (
    <main className='main'>
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Contact />
          
    </main>
  )
}

export default HomeLayout