import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import ListUsers from './pages/ListUsers'
import UseDetails from './pages/UserDetail'

class RoutesApp extends Component {
    render() {
    
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/listusers" element ={<ListUsers />} />
              <Route path="/userdatails/:id" element ={<UseDetails />} />
            </Routes>
          </BrowserRouter> 
        );
    }
}

export default RoutesApp;