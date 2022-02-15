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
      if (window.innerWidth <= 860) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Container>
            <ul>
                <li><img src={Logo} alt="logo"/></li>
                <div className="menu_icon" onClick={handleClick}>
                    {click ? <FiX /> : <FiMenu />}
                </div>
                <div className="links">
                    <NavLink exact to="/" activeClassName="active" onClick={closeMobileMenu}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/travel" activeClassName="active" onClick={closeMobileMenu}>
                        <li>Destinos</li>
                    </NavLink>
                    <NavLink to="/login" activeClassName="active" onClick={closeMobileMenu}>
                        <li>Login</li>
                    </NavLink>
                </div>
                
            </ul>
        </Container>
    );
}

export default Header;
