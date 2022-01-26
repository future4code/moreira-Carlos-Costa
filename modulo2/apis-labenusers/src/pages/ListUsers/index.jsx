import React, { Component } from 'react';

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
    getAllUsersLists = () => {
        axios
          .get(url, headers)
          .then((res) => {
            this.setState({ usersLists: res.data});
          })
          .catch((err) => {
            alert("Algo deu errado, tente novamente");
          });
    };

    deleteUser = (id) => {
          axios.delete(`${url}/${id}`, headers)
            .then((res) => {
                alert("ok");
                this.getAllUsersLists();
                this.setState({usersLists: this.state.usersLists})
            })
            .catch((err) => {
                alert("Algo deu errado, tente novamente");
            })
    }
    
    render() {
        const usersListComponents = this.state.usersLists.map(play => {
            return <li key={play.id}>
                {play.name}
                <button onClick={() => {this.deleteUser(play.id)}}>X</button>
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
