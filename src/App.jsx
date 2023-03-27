import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [films, setFilms] = useState([]);
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home setFilms={setFilms} films={films} />}
          />
          <Route path="/:title" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
