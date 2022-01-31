import React, { Component } from 'react';
import {useParams, Link } from 'react-router-dom'

import {Container} from './styled'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { FiMusic } from 'react-icons/fi'

import axios from 'axios'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
}


const headers = {
    headers: {
      Authorization: "moreira-Carlos-Costa"
    }
};


class AddMusicPlayList extends Component {
    state = {

        nameInput: "",
        artistInput: "",
        urlInput: "",
    };
    

    addMusicPlayList = () => {
        const body = {
          name: this.state.nameInput,
          artist: this.state.artistInput,
          url: this.state.urlInput
          
        };
    
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.params.id}/tracks`, body, headers)
          .then(() => {
            alert(`musica adicionanda a playlist com sucesso!`);
            this.setState({
                nameInput: "",
                artistInput: "",
                urlInput: "",
            });
            
          })
          .catch((err) => {
            alert(err.response.data.message);
           
          });
    };
    
    onChangeInputName = (e) => {
        this.setState({ nameInput: e.target.value });
    };
    onChangeInputArtist = (e) => {
        this.setState({artistInput: e.target.value})
    }
    onChangeInputUrl = (e) => {
        this.setState({urlInput: e.target.value})
    }
    render() {
        return (
            <Container> 
                <Link to="/">
                    <button className="button_back">
                        <MdKeyboardArrowLeft style={{fontSize:20}}/>
                        Voltar
                    </button>
                </Link>
                <div className="form">
                <div className="logo">
                    <FiMusic style={{fontSize: 40, marginRight: 2}}/>
                    <h1>Labefy</h1>
                </div>
                    <div className="subtitle">Adicione sua musica favorita.</div>
                    <div className="input-container ic1">
                      <input 
                      id="firstname" 
                      className="input" 
                      type="text" 
                      placeholder=" " 
                      onChange={this.onChangeInputName} 
                      value={this.state.nameInput} 
                      />
                      <div className="cut"/>
                      <label htmlFor="firstname" className="placeholder">Nome da musica</label>
                    </div>
                    <div className="input-container ic2">
                      <input 
                      id="lastname" 
                      className="input" 
                      type="text" 
                      placeholder=" " 
                      onChange={this.onChangeInputArtist} 
                      value={this.state.artistInput} 
                      />
                      <div className="cut"/>
                      <label htmlFor="lastname" className="placeholder">Nome do artista</label>
                    </div>
                    <div className="input-container ic2">
                      <input 
                      id="email" 
                      className="input" 
                      type="text" 
                      placeholder=" " 
                      onChange={this.onChangeInputUrl} 
                      value={this.state.urlInput} 
                      />
                      <div className="cut cut-short"/>
                      <label htmlFor="email" className="placeholder">Url da musica</label>
                    </div>
                    <button onClick={() => {this.addMusicPlayList()}} className="submit">Salvar</button>
                </div>
            </Container>
        );
    }
}

export default withParams(AddMusicPlayList);
