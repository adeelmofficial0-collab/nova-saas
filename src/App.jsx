import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className="bg-white dark:bg-[#080E1A] min-h-screen">
      <>
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </>
    </div>
  )
}

export default App
