import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import "./style.css";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App;
