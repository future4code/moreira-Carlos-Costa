import React, { Component } from 'react'

import { Container } from './styled'

class DetailPlayList extends Component {
    render() {
        console.log('details', this.props.playListById.map(res => res.url))
        return (
            <Container>
               <div className="container_music">
                   {this.props.playListById.map(res => (
                    <ul>
                        <li>
                            <div>
                                <span>{res.name}</span>
                            </div>
                        </li>
                        
                    </ul>
                   ))}
               </div>
            </Container>
        );
    }
}

export default DetailPlayList;