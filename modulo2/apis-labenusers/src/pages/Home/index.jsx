import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Container } from './styled';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
      Authorization: "moreira-Carlos-Costa"
    }
};
class Home extends Component {

    state = {

        nameInput: "",
        emailInput: "",
      
    };

    createUsers = () => {
        const body = {
          name: this.state.nameInput,
          email: this.state.emailInput
        };
    
        axios.post(url, body, headers)
          .then(() => {
            alert(`Usuario foi criada com sucesso!`);
            this.setState({ nameInput: "", emailInput: "" });
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.setState({ nameInput: "", emailInput: "" });
          });
    };

    onChangeInputName = (e) => {
        this.setState({ nameInput: e.target.value });
    };

    onChangeInputEmail = (e) => {
        this.setState({ emailInput: e.target.value });
    };
    
    render() {
        return (
            <Container>
               
                <div className="container_form">
                    <div className="button_link">
                        <Link to="/listusers">
                            <button type="button">Trocar de tela</button>
                        </Link>
                    </div>
                
                    
                    <div>
                        <h1>LabUsers</h1>
                        <input 
                        type="text" 
                        placeholder="Digite seu Nome"
                        value={this.state.nameInput}
                        onChange={this.onChangeInputName}
                         />
                        <input 
                        type="text" 
                        placeholder="Digite seu Email"
                        value={this.state.emailInput}
                        onChange={this.onChangeInputEmail}
                        />
                        <button type="button" onClick={this.createUsers}>Criar Usuário</button>
                    </div>
                    
                </div>
            </Container>
        );
    }
}

export default Home;
