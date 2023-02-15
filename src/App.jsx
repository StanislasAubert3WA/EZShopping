import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Nav />}> */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/*<Route path="user" element={<UserPage />} />*/}
            {/*<Route path="*" element={<NoPage />} />*/}
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App
