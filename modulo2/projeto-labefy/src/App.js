import React from 'react';

import Header from './components/Header'
import PlayList from './components/PlayList'
import Player from './components/Player'
import DetailPlayList from './components/DetailPlayList'

function App() {
  return (
    <div className="App">
      <Header />
      <PlayList />
      <Player />
      <DetailPlayList />
    </div>
  );
}

export default App;
