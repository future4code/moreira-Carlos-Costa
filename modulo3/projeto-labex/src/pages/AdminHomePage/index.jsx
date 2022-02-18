import React from 'react';
import HeaderLogout from "../../components/HeaderLogout"
import {usePrivateRoute} from "../../hooks/usePrivateRoute"
import { useFetch } from "../../hooks/useFetch"

import { AiOutlineDelete } from "react-icons/ai"

import apiPlanets from "../../components/Planets"

import { Container, Background, ContainerAdminHomePage, ContainerCard, CardTravel } from './styled'

import BackgroundImg from "../../assets/background1.svg"

const AdminHomePage = () => {
    usePrivateRoute()
    const { data:travels, isLoading } = useFetch("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-costa-moreira/trips")
    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <HeaderLogout />
                <ContainerAdminHomePage>
                    <ContainerCard>
                        <h1>Painel Administrativo</h1>
                        <CardTravel>
                            <ul>
                                {!isLoading && travels && travels.length > 0 && travels?.map(res => (
                                    <li>
                                        <div style={{display: 'flex', flexDirection:'column'}}>
                                        { apiPlanets
                                            .filter(planet => planet.name === res.planet)
                                            .map(planet => {
                                                    return (
                                                        <>
                                                        <img src={planet.url} style={{width: "30px"}} alt="img" />
                                                        <p>{planet.name}</p>
                                                        </>
                                                    )
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
