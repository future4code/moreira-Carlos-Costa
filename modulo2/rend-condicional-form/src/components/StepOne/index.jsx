import React, { Component } from 'react';

import { Container, Form, Button } from './styled'

class StepOne extends Component {
    render() {
        return (
            <Container>
                <h1>ETAPA 1- DADOS GERAIS</h1>
                <Form>
                    <ul>
                        <li>
                            <div>
                                <p>1. Qual o seu nome?</p>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>2. Qual sua idade?</p>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>3. Qual seu email?</p>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>4. Qual a sua escolaridade?</p>
                                <select>
                                    <option value="Ensino médio completo">Ensino médio completo</option>
                                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                                    <option value="Ensino superior completo">Ensino superior completo</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Button onClick={this.props.buttonStepPage}type="button">Proxima etapa</Button>
                            </div>
                        </li>
                    </ul>
                </Form>
            </Container>
        );
    }
}

export default StepOne;
