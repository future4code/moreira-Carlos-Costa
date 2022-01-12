import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconArrow from '../../img/arrow.svg'
import iconPlus from '../../img/plus.svg'
import iconArrowRed from '../../img/arrow-red.svg'
import iconPlusRed from '../../img/plus-red.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
  max-height: 300px;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,

    marcarPost : false,
    compartilharPost: false,
  }

  onClickCurtida = () => {
    if(!this.state.curtido) {
      this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
    else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
    })
  }
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcarPost = () => {
    if(!this.state.marcarPost) {
      this.setState({
        marcarPost: true,
      
      })
    }
    else{
      this.setState({
      marcarPost: false,
    
    })
    }
    
  }
  onClickCompartilharPost = () => {
    if(!this.state.compartilharPost) {
      this.setState({
        compartilharPost: true,
      
      })
    }
    else{
      this.setState({
      compartilharPost: false,
    
    })
    }
    
  }
  render() {
    let iconeCurtida
    
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcaPost

    if(!this.state.marcarPost) {
      iconeMarcaPost = iconArrow
    } else {
      iconeMarcaPost = iconArrowRed
    }

    let iconeCompartilharPost

    if(!this.state.compartilharPost) {
      iconeCompartilharPost = iconPlus
    } else {
      iconeCompartilharPost = iconPlusRed
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeMarcaPost}
          onClickIcone={this.onClickMarcarPost}
          
        />

        <IconeComContador
          icone={iconeCompartilharPost}
          onClickIcone={this.onClickCompartilharPost}
          
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post