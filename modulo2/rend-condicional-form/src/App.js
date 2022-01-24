import React from 'react'

import {ContainerApp, GlobalStyle} from './Appstyled'


import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import FinalStep from './components/FinalStep'


export default class App extends React.Component {

  state = {
    etapa: 1
  };

  stepPage = () => {
    this.setState({etapa: this.state.etapa + 1});
  }
  render() {
  const renderSteps = () => {
      switch (this.state.etapa) {
        case 1: 
          return <StepOne buttonStepPage={this.stepPage}/>;
        case 2: 
          return <StepTwo buttonStepPage={this.stepPage}/>;
        case 3: 
          return <StepThree buttonStepPage={this.stepPage}/>;
        case 4: 
          return <FinalStep/>;  
        
        default: return <div> Erro! Página não encontrada</div>;
           
      }
    };  
    return (
      <>
        <GlobalStyle />
        <ContainerApp>
          {renderSteps()}
        </ContainerApp>
      </>
    );
  }
}
