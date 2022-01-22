import './App.Styled.js'

import {GlobalStyled, Container} from './App.Styled'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'


function App() {
  return (
    <>
    <GlobalStyled />
    <Header />
    <Container>
      <SideBar />
      <Main />
    </Container>
    </>
  );
}

export default App;
