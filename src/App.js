import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleContainer from './pages/SingleContainer'
import ProductContainer from './pages/ProductContainer';

function App() {
  return (
    <>
      <BrowserRouter basename="/react-e-commerce">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/all' element={<ProductContainer />} />
          <Route path='/product' element={<SingleContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
