import React from 'react'
import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"

import { Container, Background, ContainerMain, Main, MainLeft, MainRight, MainFooter } from "./styled"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper"

import BackgroundImg from "../../assets/Bitmap1.png"
import LoadingImage from "../../assets/loading.gif"

import apiPlanets from "../../components/Planets.js"

import {useFetch} from "../../hooks/useFetch"


const Travel = () => {
    const { data:travels, isLoading, error } = useFetch("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-costa-moreira/trips")

    const history=useNavigate()

    const onClickGoToApplicationFormPage = (id) =>{
        history(`/aplication_form/${id}`)
        
      } 
    
    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Header />
                <ContainerMain>
                    <span>Escolha seu destino</span>

                </ContainerMain>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div className="loading">
                         {isLoading && <img  src={LoadingImage}/>}
                    </div>
                    {!isLoading && error && <h1>Algo deu errado!<span>: (</span></h1>}
                    {!isLoading && travels && travels.length > 0 && travels?.map(res => (
                        <SwiperSlide>
                            <Main>

                                <MainLeft>
                                    { apiPlanets
                                        .filter(planet => planet.name === res.planet)
                                        .map(planet => {
                                            return (
                                                <img className="img" src={planet.url} alt="img" />
                                            )
                                        })
                                    }
                                </MainLeft>
                                <MainRight>
                                    <span>{res.planet}</span>
                                    <p>{res.description}</p>
                                    <MainFooter>
                                        <div>
                                            <p className="titulo">Data</p>
                                            <p>{res.date}</p>
                                        </div>
                                        <div>
                                            <p className="titulo">Est. de Viagem</p>
                                            <p>{res.durationInDays} Dias</p>
                                        </div>

                                    </MainFooter>
                                    <hr style={{ width: '90%', margin: 0 }} />
                                    <div className="button">
                                        <button onClick={() => {onClickGoToApplicationFormPage(res.id)}}>Inscreva-se</button>
                                    </div>
                                </MainRight>


                            </Main>
                        </SwiperSlide>
                    ))}
                    {!isLoading && travels && travels.length === 0 && (
                        <h1>Não há nemhuma Viagem Cadastrada</h1>
                    )}
                </Swiper>
            </Background>
        </Container>
    );
}

export default Travel;
