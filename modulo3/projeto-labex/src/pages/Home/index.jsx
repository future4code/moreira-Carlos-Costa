import React from 'react';
import { Link } from "react-router-dom";

import { Container, Background, Main, MainLeft, MainRight } from "./styled";

import Header from "../../components/Header"

import BackgroundRight from "../../assets/Bitmap.png"
import BackgroundLeft from "../../assets/Bitmap2.png"

const Home = () => {
    return (
        <Container>
            
            <Background>
                <img src={BackgroundLeft} alt="bitmap2.png" />
                <img src={BackgroundRight} alt="bitmap.png" />
            </Background>
            <Main>
                <Header/>
                <div className="container_main">
                    <MainLeft>
                        <div>
                            <h4>ENTÃO, VOCÊ QUER VIAJAR PARA O</h4>
                            <h1>ESPAÇO</h1>
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
