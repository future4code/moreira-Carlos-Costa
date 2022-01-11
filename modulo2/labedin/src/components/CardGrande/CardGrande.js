import React from 'react';
import {BigCardContainer, BigCardContainerImg, BigCardContainerH4, BigCardContainerDiv } from './CardGrandeStyled.js'

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardContainerImg src={ props.imagem } alt={props.nome}/>
            <BigCardContainerDiv>
                <BigCardContainerH4>{ props.nome }</BigCardContainerH4>
                <p>{ props.descricao }</p>
            </BigCardContainerDiv>
        </BigCardContainer>
    )
}

export default CardGrande;