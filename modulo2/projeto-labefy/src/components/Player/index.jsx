import React, { Component } from 'react'

import { Container } from './styled'

class Player extends Component {
    render() {
        return (
            <Container>
               <div className="container_player">
                    <audio controls src="http://spoti4.future4.com.br/1.mp3"></audio>
               </div>
            </Container>
        );
    }
}

export default Player;