import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Layout from './layouts/Layout'

function App() {
    return (
        <Layout>
            <Home />
        </Layout>
    )
}

export default App
