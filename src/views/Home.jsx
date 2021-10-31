import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <main className='content'>
        <h2 className='content__h2'>TRENDS NOW</h2>
      </main>
      <Footer />
    </React.Fragment>
  )
}
