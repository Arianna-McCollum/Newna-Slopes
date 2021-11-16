import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer'
import "./style.css";
import { Routes, Route} from "react-router-dom";
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
