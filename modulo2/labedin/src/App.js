import React from 'react';
import {GlobalStyled, Container, SectionContainer} from './GlobalStyled'
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';

import { UilEnvelope, UilLocationPinAlt } from '@iconscout/react-unicons'

function App() {
  return (
    <Container>
      <GlobalStyled/>
      <SectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://imagens-traval.s3.amazonaws.com/IMG_20201011_073926.jpg" 
          nome="Henrique Costa" 
          descricao="Desenvolvedor Full Stack Jr | ReactJs | NodeJs | JavaScript | TypeScript"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </SectionContainer>

      <SectionContainer>
        <CardPequeno 
          icon = {<UilEnvelope />}
          nome= "Email"
          text="heinrickcostta@gmail.com"        
        />
      </SectionContainer>

      <SectionContainer>
        <CardPequeno 
          icon= {<UilLocationPinAlt/>}
          nome= "Rua"
          text="Rua Manoel Jovina N 42"        
        />
      </SectionContainer>

      <SectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </SectionContainer>

      <SectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </SectionContainer>
    </Container>
  );
}

export default App;
