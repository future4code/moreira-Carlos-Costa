import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Users from './pages/Users';
import MatchUsers from './pages/MatchUsers';

class RoutesApp extends Component {

    render() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/users" element ={<Users />} />
                <Route path="/matches" element ={<MatchUsers />} />
            </Routes>
        </BrowserRouter> 
        );
    }
}

export default RoutesApp;