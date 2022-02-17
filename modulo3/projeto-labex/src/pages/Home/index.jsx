import React from 'react';
import { Link } from "react-router-dom";

import { Container, Background, Main, MainLeft, MainRight } from "./styled";

import Header from "../../components/Header"

import Img from "../../assets/background.svg"

const Home = () => {
    return (
        <Container>
            
            <Background>
                <img src={Img} alt="bitmap2.png" />
                
            </Background>
            <Main>
                <Header/>
                <div className="container_main">
                    <MainLeft>
                        <div>
                            <h1>ENTÃO, VOCÊ QUER VIAJAR PARA O</h1>
                            <h4>ESPAÇO</h4>
                            <p>Vamos encarar; se você quer ir para o espaço, você pode ir genuinamente para o espaço sideral e não pairar meio que à beira dele. Bem,
                                sente-se e relaxe porque nós lhe daremos uma experiência verdadeiramente fora deste mundo!</p>  
                        </div>

                    </MainLeft>
                    <MainRight>
                        <Link to="/travel">
                            <span>EXPLORE</span>
                        </Link>

                    </MainRight>
                </div>    
                

                
            </Main>
        </Container>
    );
}

export default Home;
