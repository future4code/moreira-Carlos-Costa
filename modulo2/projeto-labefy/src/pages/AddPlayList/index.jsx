import React, { Component } from 'react';

import { Link } from 'react-router-dom' 

import axios from 'axios';

import { Container } from './styled'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import {FiMusic} from 'react-icons/fi'



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
            <button className="button_back"><MdKeyboardArrowLeft style={{fontSize:20}}/>Voltar</button>
          </Link>
          <div className="form">
                <div className="logo">
                    <FiMusic style={{fontSize: 40, marginRight: 2}}/>
                    <h1>Labefy</h1>
                </div>
            <div className="input-container ic1">
              <input
                type="text"
                onChange={this.onChangeInputCategory}
                value={this.state.categoryInput}
                placeholder=" "
                className="input" 
              />
              <div className="cut" />
              <label htmlFor="firstname" className="placeholder">Adicionar Categoria</label>

              <button onClick={() => { this.createCategory() }} className="submit">Salvar</button>
            </div>
          </div>

        </Container>
      );
    }
}

export default AddPlayList;
