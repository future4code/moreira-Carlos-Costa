import React from 'react'
import {Container} from './styled'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Container>
                <div className="container_logo">
                     <img src={Logo} alt="logo" />
                </div>
               <div className="container_main">
                   <h1>Encontre o seu parceiro aqui</h1>
                    <p>Junte-se a nós e faça um bom amigo</p>
                    <Link className="btn_primary" to="/users">
                        <button>Junte-se a nós</button>
                    </Link>
                    
               </div>
                
            </Container>
        </>
    );
}

export default Home;
