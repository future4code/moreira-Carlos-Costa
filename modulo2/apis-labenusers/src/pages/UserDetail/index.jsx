import React, { Component } from 'react';
import {useParams, Link } from 'react-router-dom';

import { Container } from './styled';

import { AiOutlineDelete } from 'react-icons/ai'

import axios from 'axios';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
      Authorization: "moreira-Carlos-Costa"
    }
};

class UserDetail extends Component {
    state = {
        user: [],
    };
    componentDidMount() {
        this.getUserById();
        
    }
   
    getUserById = async () => {
        try {
            const response = await axios.get(`${url}/${this.props.params.id}`, headers)
            this.setState({user: response.data});
            
        }
        catch (error) {
            alert("Erro");
        }
        
    }

    deleteUser = async (id) => {
       
        if(window.confirm("Tem certeza de que deseja deletar esse usuario?") === true){

            try {
                await axios.delete(`${url}/${id}`, headers)
                alert(`Usuario foi deletado com sucesso!`);
                this.setState({user: ''})

                
            }
            catch (error) {
                alert("Error ao deletar usuario");
            }
        }
                
    }
    render() {
      
        return (
            <Container>
                <div className="container_form">
                    <div className="button_link">
                        <Link to="/listusers">
                            <button type="button">Trocar de tela</button>
                        </Link>
                    </div>  
                    <li key={this.state.user.id}>

                        <span onClick={() => { this.getUserById(this.state.user.id) }}>
                            <p><strong>Nome: </strong>{this.state.user.name} {' '}</p>
                            <p><strong>Email: </strong>{this.state.user.email}</p>
                        </span>

                        <button onClick={() => { this.deleteUser(this.state.user.id) }}><AiOutlineDelete/></button>
                    </li>;
                </div>

            </Container>
        );
    }
}

export default withParams(UserDetail);
