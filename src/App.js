import './App.css';

import Home from './component/Home/Home';
import Navbar from './component/navbar/Navbar';
import About from './component/About/About';
import Features from './component/Features/Features';
import Tours from './component/Tours/Tours';
import Stories from './component/Stories/Stories';
import Book from './component/Book/Book';
import Footer from './component/Footer/Footer';
import Popup from './component/Popup/Popup';

import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About />
      <Features />
      <Tours />
      <Stories />
      <Book />
      <Footer />
      <Popup /> */}


    <Router>
      <Routes>
      <Route path="/home" element ={<Home />} />
      <Route path="/popularbooks" element={<About /> } />
      <Route path="/buybook" element={<Tours /> } />
      <Route path="/rentbook" element={<About /> } />
      <Route path="/review" element={<Stories /> } />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
