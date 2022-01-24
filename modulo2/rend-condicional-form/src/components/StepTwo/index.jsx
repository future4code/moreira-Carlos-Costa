import React, { Component } from 'react';

import { Container, Form, Button } from './styled'

class StepTwo extends Component {
    render() {
        return (
            <Container>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <Form>
                    <ul>
                        <li>
                            <div>
                                <p>5. Qual o seu Curso?</p>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>6. Qual sua unidade de ensino?</p>
                                <input type="text" />
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

export default StepTwo;
