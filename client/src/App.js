import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Footer from './components/Footer'
import "./css/home.css";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/success" element={<Success />}></Route> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
