import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

function App() {
  const [loading, setloading] = useState(true);
  const loader = document.getElementById("tea");
  const root = document.getElementById("root");

  if (loader && root) {
    setTimeout(() => {
      loader.style.display = "none";
      root.style.display = "block";
      setloading(false);
    }, 2000)
  }
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/articles' element={<Articles />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<Home />} />
          </Route>

        </Routes>

      </BrowserRouter>
    
    // <Layout>
    //   <Home />
    //   {/* <About /> */}
    //   {/* <Projects /> */}
    // </Layout>
  )
}

export default App
