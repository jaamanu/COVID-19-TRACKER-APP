import React from 'react';
import './App.css';
import Details from './components/details';
import Homepage from './components/home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
    <Navbar />
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/details' element={<Details />} />
   </Routes>
    </div>
  )
}

export default App;
