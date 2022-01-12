import React from 'react';
import {ImagemButtonContainer, ImagemButtonContainerImg} from './ImagemButtonStyled.js'

function ImagemButton(props) {
    return (
        <ImagemButtonContainer>
            <ImagemButtonContainerImg src={ props.imagem } alt={ props.nome}/>
            <p>{ props.texto }</p>
        </ImagemButtonContainer>

    )
}

export default ImagemButton;