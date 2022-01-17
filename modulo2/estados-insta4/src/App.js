import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const SpanPost = styled.span`
  margin-bottom: 50px;
`
const SpanInput = styled.input`
  margin: 0 10px;
  padding: 8px;
`
const SpanButton = styled.button`
  margin: 0 10px;
  padding: 8px;
  cursor: pointer;
`

class App extends React.Component {
  state = {
    post : [
      {
        nomeUsuario: 'Clarice',
        fotoUsuario: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        fotoPost: 'https://images.unsplash.com/photo-1641993685499-4b5a5a55fc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        fotoPost: 'https://images.unsplash.com/photo-1641847592110-a0e5728f7d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      },
      {
        nomeUsuario: 'Roberta',
        fotoUsuario: 'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        fotoPost: 'https://images.unsplash.com/photo-1641919867326-15ea3f04726b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      }
    ],

      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""

  };

  adicionarPost = () => {
    
    const novoPost = {
     
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,

    };

    const novoPosts = [...this.state.post, novoPost];

    this.setState({ 
      post: novoPosts,
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""
    });

  }  

  onChangeInputNomeUsuario = (e) => {
    
    this.setState({ nomeUsuario: e.target.value });

  };

  onChangeInputFotoUsuario = (e) => {
    
    this.setState({ fotoUsuario: e.target.value });

  };

  onChangeInputFotoPost = (e) => {
    
    this.setState({ fotoPost: e.target.value });

  };

  render() {

    return (
      <MainContainer>
        <SpanPost> 
          <SpanInput
          placeholder="Digite seu nome"
          value={this.state.nomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          /> 
          <SpanInput 
          placeholder="Link da sua foto de usuario"
          value={this.state.fotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          /> 
          <SpanInput
          placeholder="Link da sua foto do post"
          value={this.state.fotoPost}
          onChange={this.onChangeInputFotoPost}
          /> 
          <SpanButton onClick={this.adicionarPost}>Enviar</SpanButton> 
        </SpanPost>

        {this.state.post.map((results, i) => (
          <Post
            key={i}
            nomeUsuario={results.nomeUsuario}
            fotoUsuario={results.fotoUsuario}
            fotoPost={results.fotoPost}
          />
          
        ))}
        
      </MainContainer>
    );
  }
}

export default App;
