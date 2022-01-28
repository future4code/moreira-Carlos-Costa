import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import AddPlayList from './pages/AddPlayList'

class RoutesApp extends Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/addplaylist" element ={<AddPlayList />} />
            </Routes>
          </BrowserRouter> 
        );
    }
}

export default RoutesApp;