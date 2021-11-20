import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer'
import "./css/home.css";
import { Routes, Route} from "react-router-dom";

import { StoreProvider } from "./utils/GlobalState";
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>

        <StoreProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            {/* <Route path="/signup" element={<Signup />}></Route> */}
            {/* <Route path="/login" element={<Login />}></Route> */}
            {/* <Route path="/success" element={<Success />}></Route> */}
          </Routes>
          <Footer />
        </StoreProvider>
      </ApolloProvider>


    </div>
  )
}

export default App;
