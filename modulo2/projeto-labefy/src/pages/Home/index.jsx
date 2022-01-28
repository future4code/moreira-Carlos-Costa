import React, { Component} from 'react';


import Header from '../../components/Header'
import PlayList from '../../components/PlayList'
import Player from '../../components/Player'
import DetailPlayList from '../../components/DetailPlayList'

import axios from 'axios'

import { GlobalStyled, Container, ContainerGrid } from '../../GlobalStyled'



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"


const headers = {
    headers: {
        Authorization: "moreira-Carlos-Costa"
    }
};

class App extends Component {
    state = {
        playLists: [],
        playListById: []
    };

    componentDidMount() {

        this.getAllPlayLists();
    }
    getAllPlayLists = async () => {
        try {
            const response = await axios.get(url, headers)
            this.setState({ playLists: response.data.result.list });

        }
        catch (error) {
            alert(error.response);
        }

    };
    getPlayListById = async (id) => {
        try {
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, headers)
            this.setState({ playListById: response.data.result.tracks });

        }
        catch (error) {
            alert("Erro");
        }

    }

  render() {
     
    return (
    <>
      <GlobalStyled/>
      <Container>
        <Header />
        <PlayList 
        playLists={this.state.playLists}
        getPlayListById={this.getPlayListById}
        />
        <ContainerGrid>
          <Player 
          getPlayListById={this.getPlayListById}
          />
          <DetailPlayList 
          playListById={this.state.playListById}
          />
        </ContainerGrid>
      </Container>
    </>
  );
  }
  
}

export default App;
