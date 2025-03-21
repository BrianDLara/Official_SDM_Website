import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

//Components Imports
import Nav from "../src/components/Nav"
import Footer from "../src/components/Footer"
import './App.css'


function App() {
    return ( 
      <div className='h-dvh bg-white'>
        <header className='py-4 mb-4'>
          <Nav/>
        </header>
        <main className='bg-white mt-4'>
          <Routes>
            <Route path="/" element={<App/>}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    
    )
  }

export default App
