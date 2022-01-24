import React, { Component } from 'react';

import { Container, Form, Button } from './styled'

class StepThree extends Component {
    render() {
        return (
            <Container>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <Form>
                    <ul>
                        <li>
                            <div>
                                <p>5. Por que você não terminou um curso de graduação?</p>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>6. Você fez algum curso complementar?</p>
                                <select>
                                    <option value="Ensino médio completo">Nenhum</option>
                                    <option value="Ensino médio incompleto">Curso tecnico</option>
                                    <option value="Ensino superior incompleto">Curso de ingles</option>
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

export default StepThree;
