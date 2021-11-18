import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer'
import "./style.css";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        {/* <Route path="/success" element={<Success />}></Route> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
