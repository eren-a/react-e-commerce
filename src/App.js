import React from 'react'
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleContainer from './pages/SingleContainer'
import ProductContainer from './pages/ProductContainer';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/all' element={<ProductContainer />} />
          <Route path='/product' element={<SingleContainer />} />
        </Routes>
      </HashRouter>
    </>
  )
}


export default App
