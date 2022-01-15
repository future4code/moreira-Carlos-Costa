import React from 'react';

import { FiMoreVertical, FiZoomIn } from "react-icons/fi";


import {ContainerMain,
     ContainerHeader, 
     ContainerHeaderImg, 
     ContainerHeaderIcon, 
     ContainermainMensagem,
     Span
    } from './index.Styled'

import SideBar from '../../components/SideBar'

class Main extends React.Component {
    state = {
        mensagens: [],
        valorInputUsuario: "",
        valorInputMensagem: "",  
    };
    enviarMensagem = () => {
        
        const novaMensagem = {
     
          usuario: this.state.valorInputUsuario,
         
          mensagem: this.state.valorInputMensagem,
    
        };
    
        const novasMensagens = [...this.state.mensagens, novaMensagem];
    
        this.setState({ 
            mensagens: novasMensagens,
            valorInputUsuario: "",
            valorInputMensagem: "", 
        });
      };

      onChangeInputUsuario = (e) => {
        
        this.setState({ valorInputUsuario: e.target.value });
      };
      onChangeInputMensagem = (e) => {
        
        this.setState({ valorInputMensagem: e.target.value });
      };

    render() {
        const listaDeMensagem = this.state.mensagens.map((msg) => {
            return (
              <Span>
                <strong>{msg.usuario}</strong> {msg.mensagem}
              </Span>
            );
          });
          
    return (
            <>
                <ContainerMain>
                   < SideBar />
                   <ContainerHeader>
                        <ContainerHeaderImg src={'https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=2159024400&v=beta&t=DaEt8zHiC8zdubNgX4nXLCf1nodEy1kEGy-KyYbyoKY'} style={{width: 32}} alt={"logo"} />
                        <ContainerHeaderIcon>
                            < FiZoomIn style={{marginRight: 14}}/>
                            <FiMoreVertical/>
                        </ContainerHeaderIcon>
                   </ContainerHeader>
                   <ContainermainMensagem>
                       {listaDeMensagem}
                    </ContainermainMensagem>
                </ContainerMain>

            </>
        );
    }
}

export default Main;
