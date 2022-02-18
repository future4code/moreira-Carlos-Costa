import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Header from "../../components/Header"

import api from "../../services/api"

import apiPlanets from "../../components/Planets"

import { message } from 'antd';

import { Container, Background,ContainerMain,ContainerPlanet, ContainerLogin, ContainerInput } from './styled'

import BackgroundImg from "../../assets/background1.svg"

import { Countries } from '../../components/Countries'

import { useFormApplication } from "../../hooks/useFormApplication"

const ApplicationFormPage = () => {

    const [trips, setTrips] = useState([])

    const { id } = useParams()
    
    
    useEffect(() => {
        
        const Authorization = {
        headers: { auth: localStorage.getItem("token") }
        }
        api.get(`trip/${id}`,Authorization )
        .then(res =>{
            setTrips(res.data.trip);
        })
        .catch((err) => {
            console.log(err);
        });
        
    }, [id]);

    const planetName = [trips].map(trip => trip.planet);
    const key = 'updatable';
    const { form, onChange } = useFormApplication({ name: "", age: "", profession: "", country:"", applicationText:"" });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

            try {
                message.loading({ content: 'Processando...', key });
                await api.post(`/trips/${id}/apply`,form);
                
                setTimeout(() => {
                    message.success({ content: 'Ok sua inscricao foi realizada', key, duration: 2 });

                }, 1000);

            } catch (error) {

                message.loading({ content: 'processando...', key });
                setTimeout(() => {
                    message.error({ content: 'Algo deu Errado!!!', key, duration: 2 });
                }, 1000);
            };
    }

    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Header />
                <ContainerMain>
                    <ContainerLogin>
                        <ContainerInput>
                            <form onSubmit={handleLogin}>
                                <h1>Formulário de Inscrição</h1>
                                <input
                                    value={form.name}
                                    placeholder={"Nome"}
                                    onChange={handleInputChange}
                                    name={"name"}
                                    type={"text"}
                                    pattern={"(.*[a-z]){3}"}
                                    required
                                />
                                <input
                                    value={form.age}
                                    placeholder={"Idade"}
                                    onChange={handleInputChange}
                                    name={"age"}
                                    type={"number"}
                                    min="18"
                                    required
                                />
                                <input
                                    value={form.profession}
                                    placeholder={"Profissão"}
                                    onChange={handleInputChange}
                                    name={"profession"}
                                    type={"text"}
                                    pattern={"(.*[a-z]){10}"}
                                    required
                                />
                                <input
                                    value={form.applicationText}
                                    placeholder={"Por que quer se candidatar?"}
                                    onChange={handleInputChange}
                                    name={"applicationText"}
                                    type={"text"}
                                    required
                                />
                                <select placeholder={"País"}
                                    onChange={handleInputChange} 
                                    value={form.country}
                                    name={"country"}
                                    type={"text"}
                                    required
                                    >
                                    <Countries />
                                </select>
                                <button onclick={handleLogin}>Candidatar-se</button>
                            </form>
                        </ContainerInput>
                    </ContainerLogin>
                    <ContainerPlanet>
                    { apiPlanets
                        .filter(planet => planet.name === planetName[0])
                        .map(planet =>{
                            return (
                                <>
                                    <p>{planet.name}</p>
                                    <img src={planet.url} alt="img" />
                                </>
                            )
                        })
                    }
                    </ContainerPlanet>
                </ContainerMain>
            </Background>
        </Container>
    );
}

export default ApplicationFormPage;
