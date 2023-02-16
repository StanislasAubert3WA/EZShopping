import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import {useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/UserPage';
import CartPage from './pages/CartPage';
import './App.css';
import Nav from "./components/Nav";
import GlobalStyle from './globalStyle';


function App() {

  const theme = useSelector((state) => state.theme)
  
  useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          
          {/* <Route path="/" element={<Nav />}> */}
            <Route index element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="user/cart" element={<CartPage />} />
            {/*<Route path="*" element={<NoPage />} />*/}
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
