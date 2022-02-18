import React, { useState } from 'react';
import Header from "../../components/Header"
import {usePrivateRoute} from "../../hooks/usePrivateRoute"
import { useFetch } from "../../hooks/useFetch"

import { AiOutlineDelete } from "react-icons/ai"

import 'antd/dist/antd.css';

import apiPlanets from "../../planets/api"

import { Container, Background, ContainerAdminHomePage, ContainerCard, CardTravel } from './styled'

import BackgroundImg from "../../assets/background1.svg"

const AdminHomePage = () => {
    usePrivateRoute()
    const { data:travels, isLoading, error } = useFetch("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlos/trips")
    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Header />
                <ContainerAdminHomePage>
                    <ContainerCard>
                        <h1>Painel Administrativo</h1>
                        <CardTravel>
                        
                            <ul>
                                {!isLoading && travels && travels.length > 0 && travels?.map(res => (
                                    <li>
                                        <div style={{display: 'flex', flexDirection:'column'}}>
                                        { apiPlanets.map(planet => {
                                                if(planet.name === res.planet){
                                                    return (
                                                        <>
                                                        <img src={planet.url} style={{width: "30px"}} alt="img" />
                                                        <p>{planet.name}</p>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                        </div>
                                        <p>{res.name}</p>
                                        <AiOutlineDelete style={{fontSize: "20px", cursor: 'pointer'}} />
                                    </li>
                                ))}
                            </ul>
                        </CardTravel>
                    
                    </ContainerCard>
                </ContainerAdminHomePage>
            </Background>
        </Container>
    );
}

export default AdminHomePage;