import React, { Component } from 'react';

import { Link } from 'react-router-dom' 

import axios from 'axios';

import { Container } from './styled'



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
      Authorization: "moreira-Carlos-Costa"
    }
};

class AddPlayList extends Component {
    
  state = {

    categoryInput: "",
  
};

createCategory = () => {
    const body = {
      name: this.state.categoryInput,
      
    };

    axios.post(url, body, headers)
      .then(() => {
        alert(`Categoria foi criada com sucesso!`);
        this.setState({ categoryInput: '' });
      })
      .catch((err) => {
        alert(err.response.data.message);
       
      });
};

onChangeInputCategory = (e) => {
    this.setState({ categoryInput: e.target.value });
};
    render() {
        
        return (
            <Container>
                <Link to="/">
                    <button className="btn_back">Voltar</button>
                </Link>
                <div>
                    <input 
                    type="text" 
                    onChange={this.onChangeInputCategory} 
                    value={this.state.categoryInput} 
                    placeholder="Adicionar Categoria" 
                    />
                    <button onClick={() => {this.createCategory()}}>Salvar</button>
                </div>
                
            </Container>
        );
    }
}

export default AddPlayList;
