import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api"
import HeaderLogout from "../../components/HeaderLogout"

import BackgroundImg from "../../assets/background1.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { AiOutlineCheck } from "react-icons/ai"

import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper"


import {
    Container,
    Background,
    ContainerMain,
    Button,
    ContainerSection,
    ContainerSectionLeft,
    ContainerSectionRight,
    ButtonContent,
    Title,
    TripContainer,
    TripContent,
    TripTitle,
    TripInfo,
    CandidateInfo,
    Span,
    Approved,
} from "./styled";
import { usePrivateRoute } from "../../hooks/usePrivateRoute"

const TripDetailsPage = () => {

    usePrivateRoute();

    const [trip, setTrip] = useState([]);
    const history = useNavigate();
    const params = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        api
            .get(
                `trip/${params.id}`,
                {
                    headers: {
                        auth: token,
                    },
                }
            )
            .then((res) => {
                setTrip(res.data.trip);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const decideCandidate = (candidateId, decision) => {
        const token = window.localStorage.getItem("token");
        const tripId = trip.id;
        const body = { approve: decision };
        api.put(`trips/${tripId}/candidates/${candidateId}/decide`,body,
                {
                    headers: {
                        auth: token,
                    },
                }
            )
            .then((res) => {
                alert("Decisão cadastrada com sucesso");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container>
            <Background style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <HeaderLogout />    
            <ContainerMain>
            <TripContainer>
                <TripContent>
                    <TripTitle>{trip.name}</TripTitle>
                    <TripInfo>
                        Nome: <Span>{trip.name}</Span>
                    </TripInfo>
                    <TripInfo>
                        Descrição: <Span>{trip.description}</Span>
                    </TripInfo>
                    <TripInfo>
                        Planeta:<Span> {trip.planet}</Span>
                    </TripInfo>
                    <TripInfo>
                        Duração: <Span>{trip.durationInDays} dias</Span>
                    </TripInfo>
                    <TripInfo>
                        Data: <Span>{trip.date}</Span>
                    </TripInfo>
                </TripContent>
            </TripContainer>
            <ContainerSection>
            <ContainerSectionLeft>
                <Title> Candidatos Pendentes</Title>
                <TripContainer>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {trip.candidates && trip.candidates.length > 0 ? (
                        trip.candidates &&
                        trip.candidates.map((candidate) => {
                            return (
                                <SwiperSlide className="mySwiperSlide">
                                    <CandidateInfo>
                                        Nome: <Span>{candidate.name}</Span>
                                    </CandidateInfo>
                                    <CandidateInfo>
                                        Texto de Candidatura:{" "}
                                        <Span>{candidate.applicationText}</Span>
                                    </CandidateInfo>
                                    <CandidateInfo>
                                        Profissão: <Span>{candidate.profession}</Span>
                                    </CandidateInfo>
                                    <CandidateInfo>
                                        Idade: <Span>{candidate.age}</Span>
                                    </CandidateInfo>
                                    <CandidateInfo>
                                        País: <Span>{candidate.country}</Span>
                                    </CandidateInfo>
                                    <ButtonContent>
                                        <Button onClick={() => decideCandidate(candidate.id, true)}>
                                            APROVAR
                                        </Button>
                                        <Button
                                            onClick={() => decideCandidate(candidate.id, false)}
                                        >
                                            REPROVAR
                                        </Button>
                                    </ButtonContent>
                                    
                                </SwiperSlide>
                                
                               
                            );
                        })
                    ) : (
                        <h4> Não há candidatos para aprovar</h4>
                    )} 
                    
                  
                </Swiper>
                   
                </TripContainer>
            </ContainerSectionLeft>
            <ContainerSectionRight>
                <Title> Candidatos Aprovados</Title>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                   
                    {trip.approved && trip.approved.length > 0 ? (
                    trip.approved &&
                    trip.approved.map(candidate => (
                         <SwiperSlide className="mySwiperSlide">
                        <Approved >
                           
                            <span><AiOutlineCheck /></span>
                            <p>{candidate.name}</p>
                            <p>{candidate.age}</p>
                        </Approved>
                         </SwiperSlide>
                   
                    ))
                    
                ) : (
                    <h4>Não há candidatos aprovados</h4>
                )}
                   
                </Swiper>
            </ContainerSectionRight>
            </ContainerSection>
            </ContainerMain>
            </Background>
        </Container>
    );
}

export default TripDetailsPage;


/**
 *   {  }
 */