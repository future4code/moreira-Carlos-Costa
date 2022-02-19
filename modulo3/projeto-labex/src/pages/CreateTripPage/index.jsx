import React from 'react';
import { useNavigate } from "react-router-dom";

import HearderLogout from "../../components/HeaderLogout"

import { Container, Background, ContainerMain, Input, Fields, Select, Button } from "./styled"

import api from "../../services/api"
import BackgroundImg from "../../assets/background1.svg"

import { useFormApplication } from "../../hooks/useFormApplication"

import { Planets } from '../../components/Selects'

import { usePrivateRoute } from "../../hooks/usePrivateRoute"

const CreateTrip = () => {
    usePrivateRoute()
    const history = useNavigate();
    const { form, onChange, setForm } = useFormApplication({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })
    const handleClickCreateTrip = async (e) => {
        e.preventDefault();

        const Authorization = {
            headers: { auth: localStorage.getItem("token") }
        }

        await api.post("trips",form,Authorization)
            .then((res) => {
                alert("Formulário Enviado com sucesso!");
                history("/admin");
            })
            .catch((err) => {
                alert("Erro interno, tente novamente mais tarde");
            });
    };
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };
    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <HearderLogout />
                <form onSubmit={handleClickCreateTrip}>
                    <ContainerMain>
                       
                        <Fields> 
                            <h1>Criar Viagem</h1>
                            <Input
                                required
                                name="name"
                                type="text"
                                onChange={handleInputChange}
                                value={form.name}
                                placeholder="Nome"
                            />
                            <Select placeholder={"Planeta"}
                                onChange={handleInputChange}
                                value={form.planet}
                                name={"planet"}
                                type={"text"}
                                required
                            >
                                <Planets />
                            </Select>

                            <Input
                                required
                                name="date"
                                onChange={handleInputChange}
                                type="date"
                                value={form.date}
                                placeholder="Data"
                            />
                            <Input
                                required
                                name="description"
                                onChange={handleInputChange}
                                type="text"
                                value={form.description}
                                placeholder="Descrição"
                                max={30}
                            />
                            <Input
                                required
                                name="durationInDays"
                                onChange={handleInputChange}
                                type="number"
                                value={form.durationInDays}
                                placeholder="Duração"
                            />
                            <Button type="submit">criar viagem</Button>
                        </Fields>
                    </ContainerMain>


                </form>
            </Background>
        </Container>
    );
}

export default CreateTrip;
