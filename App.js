import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/contacts'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Portfolio from './pages/Portfolio'
import Website from './pages/Website'
import Technology from './pages/Technology'
const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/website" element={<Website/>} />
          <Route path="/technology" element={<Technology/>} />

        </Routes>
        <Footer/>


    </Router>
  )
}

export default App