import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'

const App = () => {
  return (
    <div className=' mx-auto'>
      <Navbar/> 
      <Hero/> 
      <About/>
      <Projects/>
      <Experiences/>
      <section className='min-h-screen'></section>
    </div>
  )
}

export default App
