import './App.Styled.js'

import {GlobalStyled, Container} from './App.Styled'

import Header from './components/Header'
import ContainerMain from './components/Main'


function App() {
  return (
    <>
    <Container>

      <GlobalStyled />
      <Header />
      <ContainerMain />

    </Container>
    </>
  );
}

export default App;
