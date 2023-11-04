import { useState } from 'react'
import './App.css'
import { NavBar } from './components'
import { Header, Services, Footer } from './pages'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Services />
      <Footer />
    </div>
  )
}

export default App
