import React from 'react'


import Header from "../../components/Header"
import { Container, Background, ContainerMain, Main, MainLeft, MainRight, MainFooter } from "./styled"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper"

import BackgroundImg from "../../assets/Bitmap1.png"

import apiPlanets from "../../planets/api"

import {useFetch} from "../../hooks/useFetch"


const Travel = () => {
    const { data:travels, isLoading, error } = useFetch("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlos/trips")
    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Header />
                <ContainerMain>
                    <span>Escolha seu destino</span>

                </ContainerMain>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {isLoading && <p style={{color: 'snow'}}>Carregando...</p>}
                    {!isLoading && error && <p>error</p>}
                    {!isLoading && travels && travels.length > 0 && travels?.map(res => (
                        <SwiperSlide>
                            <Main>

                                <MainLeft>
                                    { apiPlanets.map(planet => {
                                            if(planet.name === res.planet){
                                                return (
                                                    <img src={planet.url} alt="img" />
                                                )
                                            }
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
                                        <button>Inscreva-se</button>
                                    </div>
                                </MainRight>


                            </Main>
                        </SwiperSlide>
                    ))}
                    {!isLoading && travels && travels.length === 0 && (
                        <p>Não há nemhuma Viagem</p>
                    )}
                </Swiper>
            </Background>
        </Container>
    );
}

export default Travel;
