import React, {useEffect, useState} from 'react';
import HeaderLogout from "../../components/HeaderLogout"
import {usePrivateRoute} from "../../hooks/usePrivateRoute"
import { useFetch } from "../../hooks/useFetch"

import api from "../../services/api"

import { Popconfirm, message } from 'antd';

import { AiOutlineDelete } from "react-icons/ai"

import apiPlanets from "../../components/Planets"

import { Container, Background, ContainerAdminHomePage, ContainerCard, CardTravel } from './styled'

import BackgroundImg from "../../assets/background1.svg"

const AdminHomePage = () => {
    const [trips, setTrips ] = useState([])
    usePrivateRoute()
    const key = 'updatable';

    const getAllTrips = () => {
        api.get("trips")
        .then((res) => {
            setTrips(res.data.trips)
            console.log(res.data.trips)
        })
    }
    useEffect(() => {
       getAllTrips()
    },[trips.length])
    const { data:travels, isLoading } = useFetch("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-costa-moreira/trips")
    const text = 'Tem certeza de que deseja excluir esta viagem';

    const confirm = (id) => {

        const Authorization = {
            headers: { auth: localStorage.getItem("token") }
        }

        api.delete(`/trips/${id}`, Authorization )
            .then(() => {
                message.loading({ content: 'Viagem deletada com sucesso!', key });
                getAllTrips()
            })
            .catch((err) => {
                console.log(err);
            })
    }
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
                                    <li key={res.id}>
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
                                        <Popconfirm
                                        placement="rightTop"
                                        title={text}
                                        onConfirm={() => {confirm(res.id)}}
                                        okText="Sim"
                                        cancelText="Não"
                                        >
                                            <AiOutlineDelete style={{fontSize: "20px", cursor: 'pointer'}} />
                                        </Popconfirm>
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
