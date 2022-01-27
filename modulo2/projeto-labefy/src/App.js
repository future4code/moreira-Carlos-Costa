import React from 'react';

import Header from './components/Header'
import PlayList from './components/PlayList'
import Player from './components/Player'
import DetailPlayList from './components/DetailPlayList'

import { GlobalStyled, Container, ContainerGrid } from './GlobalStyled'

function App() {
  return (
    <div className="App">
      
      <GlobalStyled/>
      <Container>
          <Header />
          <PlayList />
          <ContainerGrid>
            <Player />
            <DetailPlayList />
          </ContainerGrid>
          
      </Container>
      
     
    </div>
  );
}

export default App;
