import React, { Component } from 'react';

import { Container } from './styled'
class PlayList extends Component {
    render() {
        return (
            <Container>
                <button>Add PlayList</button>
                <ul>

                    <li>
                        <div>
                            Sertanejo
                        </div>
                    </li>
                    <li>
                        <div>
                            Forro
                        </div>
                    </li>
                    <li>
                        <div>
                            Pop
                        </div>
                    </li>
                    <li>
                        <div>
                            Mpb
                        </div>
                    </li>
                    
                </ul>
            </Container>
        );
    }
}

export default PlayList;