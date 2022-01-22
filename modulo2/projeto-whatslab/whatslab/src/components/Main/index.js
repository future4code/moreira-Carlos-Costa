import React from 'react';

import { FiMoreVertical, FiZoomIn } from "react-icons/fi";

import {
  ContainerMain,
  ContainerHeader,
  ContainerHeaderImg,
  ContainerHeaderIcon,
  ContainerFooterInPut,
  Span,
  Mensseger,
  ContainerNome,
} from './index.Styled'

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

      if (msg.usuario === "eu") {
        return (
          <Span tipo={"eu"}>{msg.mensagem}</Span>
        )
      }
      else {
        return (
          <Span tipo={"outro"}>
            <ContainerNome style={{ fontSize: 18, padding: 8 }}>{msg.usuario}</ContainerNome>
            <p style={{ padding: 8 }}>{msg.mensagem}</p>
          </Span>
        );

      }




    });
    return (
      <>
        <ContainerMain>
          <ContainerHeader>
            <ContainerHeaderImg src={'https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=2159024400&v=beta&t=DaEt8zHiC8zdubNgX4nXLCf1nodEy1kEGy-KyYbyoKY'} style={{ width: 32 }} alt={"logo"} />
            <ContainerHeaderIcon>
              <FiZoomIn style={{ marginRight: 14 }} />
              <FiMoreVertical />
            </ContainerHeaderIcon>
          </ContainerHeader>
          <Mensseger>{listaDeMensagem}</Mensseger>
          <ContainerFooterInPut>
            <input
              onChange={this.onChangeInputUsuario}
              value={this.state.valorInputUsuario}
              placeholder={"Usuario"}
              name={"Usuario"}
              style={{ width: "20%", padding: 10, borderRadius: 10, border: 0, marginRight: 6, }}
            />
            <input
              onChange={this.onChangeInputMensagem}
              value={this.state.valorInputMensagem}
              placeholder={"Mensagem"}
              name={"Mensagem"}
              style={{ width: "70%", padding: 10, borderRadius: 10, border: 0 }}
            />
            <button
              onClick={this.enviarMensagem}
              style={{ padding: 10, marginLeft: 6, borderRadius: 4, border: 0, cursor: "pointer" }}>enviar</button>
          </ContainerFooterInPut>
        </ContainerMain>


      </>
    );
  }
}

export default Main;
