import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Travel from './pages/Travel'
import Login from './pages/Login'
import AdminHomePage from './pages/AdminHomePage'
import NotFound from './pages/NotFound';
import ApplicationFormPage from './pages/ApplicationFormPage'


const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/travel" element ={<Travel />} />
                <Route path="/login" element ={<Login />} />
                <Route path="/detail_travel" element ={<AdminHomePage />} />
                <Route path="/aplication_form/:id" element ={<ApplicationFormPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter> 
    );
    
}

export default RoutesApp;