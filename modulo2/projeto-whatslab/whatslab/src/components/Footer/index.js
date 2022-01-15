import React, { Component } from 'react';

import { } from './indexStyled'

class Footer extends Component {
    render() {
        return (
            <ContainerFooterInPut>
                       <input
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                        placeholder={"Usuario"}
                        name={"Usuario"}
                        style={{width:"20%", padding: 10, borderRadius: 10, border: 0, marginRight: 6, }}

                       /> 
                       <input 
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Mensagem"} 
                        name={"Mensagem"}
                        style={{width:"70%", padding: 10, borderRadius: 10, border: 0 }}

                       /> 
                       <button  
                       onClick={this.enviarMensagem}
                       style={{padding: 10,marginLeft: 6, borderRadius: 4, border: 0, cursor: "pointer"}}>enviar</button>
                   </ContainerFooterInPut>
        );
    }
}

export default Footer;
