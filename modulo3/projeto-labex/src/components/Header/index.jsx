import React, {useState, useEffect} from 'react'

import { NavLink } from "react-router-dom"

import { FiMenu, FiX} from 'react-icons/fi';

import Logo from "../../assets/logo.png"

import { Container } from "./styled"

const Header = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const logon = localStorage.getItem('token')
    console.log(logon);
    return (
        <Container>
            <div className="menu_icon" onClick={handleClick}>
                    {click ? <FiX /> : <FiMenu />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><img src={Logo} className="logo" alt="logo"/></li>
                
                <div id="list" className="links">
                    <NavLink exact to="/" activeclassname="active" onClick={closeMobileMenu}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/travel" activeclassname="active" onClick={closeMobileMenu}>
                        <li>Destinos</li>
                    </NavLink>
                    <NavLink to="/login" activeclassname="active" onClick={closeMobileMenu}>
                        <li>Login</li>
                    </NavLink>
                    <NavLink to="/admin" activeclassname="active" onClick={closeMobileMenu}>
                        <li>admin</li>
                    </NavLink>
                    
                </div>
                
            </ul>
        </Container>
    );
}

export default Header;
