import React, { Component } from 'react'

import { FiMusic } from 'react-icons/fi'

import { Container } from './styled'

class Header extends Component {
    render() {
        return (
            <Container>
                <div className="header_logo">
                    <FiMusic style={{fontSize: 40, marginRight: 2}}/>
                    <h1>Labefy</h1>
                </div>
                
            </Container>
        );
    }
}

export default Header;
