import React, {useState, useEffect} from 'react'

import { NavLink, useNavigate } from "react-router-dom"

import { FiMenu, FiX} from 'react-icons/fi';

import Logo from "../../assets/logo.png"

import { Container } from "./styled"

const HeaderLogout = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const history = useNavigate()

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

    const onClickLogout = () => {
        localStorage.clear()
        history("/")
    }
    window.addEventListener('resize', showButton);

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
                    <li className="button_logout" onClick={onClickLogout}>Logout</li>
                </div>
                
            </ul>
        </Container>
    );
}

export default HeaderLogout;
