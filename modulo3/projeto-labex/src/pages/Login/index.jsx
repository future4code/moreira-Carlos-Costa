import React, { useState } from 'react';
import Header from "../../components/Header"

import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import { message } from 'antd';

import { Container, Background, ContainerLogin, ContainerInput } from './styled'

import BackgroundImg from "../../assets/background1.svg"

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate();

    const key = 'updatable';

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = { email, password };

        if (email === '' || password === '') {

            message.loading({ content: 'Processando...', key });
            setTimeout(() => {
                message.warning({ content: 'Digite Email e Senha', key, duration: 2 });
            }, 1000);
        }
        else {

            try {
                message.loading({ content: 'Processando...', key });
                const response = await api.post('login', data);
                const { token } = response.data;


                localStorage.setItem('token', token);
                setTimeout(() => {
                    message.success({ content: 'Acesso Liberado', key, duration: 2 });

                    history('/detail_travel');
                }, 1000);

            } catch (error) {

                message.loading({ content: 'processando...', key });
                setTimeout(() => {
                    message.error({ content: 'Email ou Senha Inválido', key, duration: 2 });
                }, 1000);
            };

        }

    }

    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Header />
                <ContainerLogin>
                    <ContainerInput>
                        <form onSubmit={handleLogin}>
                            <h1>Faça seu Login</h1>
                            <input
                                type="text"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button type="submit">Login</button>
                        </form>
                    </ContainerInput>
                </ContainerLogin>
            </Background>
        </Container>
    );
}

export default Login;
