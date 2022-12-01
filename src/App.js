import React from 'react';
import './App.css';
import Details from './components/details';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Display from './components/display';


function App() {
  return (
    <div className="App">
    <Navbar />
   <Routes>
    <Route path='/' element={<Display />} />
    <Route path='/details' element={<Details />} />
   </Routes>
    </div>
  )
}

export default App;
