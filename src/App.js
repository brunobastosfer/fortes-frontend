import React from 'react';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
