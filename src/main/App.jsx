import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Menu />
        <Routes />      
      </Router >
      <Footer />
    </div>
  )
}

export default App;
