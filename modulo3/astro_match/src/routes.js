import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Users from './pages/Users'

const RoutesApp = () =>{
    
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/users" element ={<Users />} />
        </Routes>
      </BrowserRouter> 
    );
    
}

export default RoutesApp;