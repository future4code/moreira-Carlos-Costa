import React from 'react';

import './index.css'

const Header = () => {
    return (
        <>
        <div className="header">
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </div>
        </>
    );
}

export default Header;
