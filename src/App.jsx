import { useState } from 'react'
import './assets/css/App.css'
import Button from './components/Button'
import Movieslist from './components/MoviesList'

function App() {

  return (
    <div className="App">
      <header className="header">
        <div className="intro">
          <h1 className="intro__title">Welcome to divi teather</h1>
          <p className="intro__text">Lorem ipsum dolor sit amet, consectetur adip</p>
          
        <Button content='Show times' className="button--cta"/>
        </div>
      </header>
      <main className="layout">
        <section className="section">
          <h3 className="section__h3">Featured</h3>
          <h2 className="section__h2">Now <span className="section__h2--light">Showing</span></h2>
          <Movieslist/>
        </section>
      </main>
    </div>
  )
}

export default App
