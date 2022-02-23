import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login'
import Signup from './pages/Signup';
import Feeds from './pages/Feeds';
import Post from './pages/Post';

const RoutesApp  = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Login />} />
                <Route path="/signup" element ={<Signup />} />
                <Route path="/feeds" element ={<Feeds />} />
                <Route path="/post" element ={<Post />} />
            </Routes>
        </BrowserRouter> 
    );
    
}

export default RoutesApp;