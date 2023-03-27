import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./app.css"
import Component from './components/Component';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail';

function App() {
  const [films, setFilms] = useState([]);
  return (
    <div className="container">
      <Component/>
    </div>
  )
}

export default App
