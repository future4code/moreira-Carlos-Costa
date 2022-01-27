import React, { Component } from 'react';

import { AiOutlineDelete } from 'react-icons/ai'

import { Link } from 'react-router-dom';

import axios from 'axios';

import { Container } from './styled';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
      Authorization: "moreira-Carlos-Costa"
    }
};



class ListeUsers extends Component {

    state = {
        usersLists: [],
      };

    componentDidMount() {
      
        this.getAllUsersLists();
    }
    getAllUsersLists = async () => {
        try {
            const response = await axios.get(url, headers)
            this.setState({ usersLists: response.data});
        
        } 
        catch (error) {
            alert(error.response);
        }
        
    };

    deleteUser = async (id) => {
       
        if(window.confirm("Tem certeza de que deseja deletar esse usuario?") === true){

            try {
                await axios.delete(`${url}/${id}`, headers)
                alert(`Usuario foi deletado com sucesso!`);
                this.getAllUsersLists();
        
            }
            catch (error) {
                alert("Error ao deletar usuario");
            }
        }
                
    }
    
    render() {
        
        const usersListComponents = this.state.usersLists.map(response => {
            return <li key={response.id}>
                <Link style={{textDecoration: 'none', color: 'white'}} to={`/userdatails/${response.id}`}>
                <span >
                    {response.name}
                </span>
                </Link>
                
                
                <button onClick={() => {this.deleteUser(response.id)}}><AiOutlineDelete/></button>
                </li>;
        });
      
        return (
            <Container>
                <div className="container_form">
                <div className="button_link">
                    <Link to="/">
                        <button type="button">Trocar de tela</button>
                    </Link>
                </div>  
                {usersListComponents}
                </div>
                
            </Container>
        );
    }
}

export default ListeUsers;
