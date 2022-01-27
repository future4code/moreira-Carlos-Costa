import React, { Component } from 'react';

import RoutesApp from './routes'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap');

* {
    margin: 0;
    padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
}
`

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <RoutesApp />
            </div>
        );
    }
}

export default App;
