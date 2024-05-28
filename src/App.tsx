import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <About /> */}
      <Projects />
    </Layout>
  )
}

export default App
