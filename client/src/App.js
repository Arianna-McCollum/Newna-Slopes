import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import "./css/home.css";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <StoreProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/shop" element={<Shop />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/success" element={<Success />}></Route>
          </Routes>
        </StoreProvider>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
