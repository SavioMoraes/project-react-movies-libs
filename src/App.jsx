// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <h1>React Movies Libs</h1>
      <Outlet />
    </div>      
  )
}

export default App
