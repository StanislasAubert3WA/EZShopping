import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/UserPage';
import CartPage from './pages/CartPage';
import './App.css';
import Nav from "./components/Nav";


function App() {
  return (
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
  );
}

export default App
