import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Travel from './pages/Travel'


const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/travel" element ={<Travel />} />
            </Routes>
        </BrowserRouter> 
    );
    
}

export default RoutesApp;