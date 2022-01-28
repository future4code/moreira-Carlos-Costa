import React, { Component} from 'react';

import RoutesApp from './route';
import { GlobalStyled} from './GlobalStyled'

class App extends Component {

  
  render() {
    return (
    <div>
      <GlobalStyled/>
      < RoutesApp />
    </div>
  );
  }
  
}

export default App;
