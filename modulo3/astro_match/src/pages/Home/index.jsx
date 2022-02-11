import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'

import { Container } from './styled'

import Logo from '../../assets/logo.png'

import Fade from 'react-reveal/Fade';

const Home = () => {

    const {Content } = Layout;

    return (
        <div>
            <Layout>
                <Content>
                    <Container>
                        <Fade top>
                            <img src={Logo} alt="" />
                        </Fade>
                        <Fade bottom>
                            <div>
                            <h1>Encontre Seu Par Perfeito</h1>
                            <p>Junte-se a nós e conheça a pessoa ideal</p>
                            <Link className="button" to="/users">
                                <button>Junte-se a nós</button>
                            </Link>
                            </div>
                        </Fade>
                    </Container>
                </Content>
            </Layout>
        </div>
    );
}

export default Home;
