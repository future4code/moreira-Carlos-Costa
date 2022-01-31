import React, { Component } from 'react'

import { Container } from './styled'


class DetailPlayList extends Component {
    state = {
        player: false,
    }

    render() {
        console.log('details', this.props.playListById.map(res => res))
        return (
            <Container>
                <div className="container_music">
                    {this.props.playListById.map(res => (

                        <ul>
                            <li>

                                <div>
                                    <span className="initial_details">
                                        <span className="name_details">{res.name}</span>
                                        <span className="artist_details">{res.artist}</span>
                                    </span>

                                    <span className="player">
                                        <audio controls id="show_play" src={res.url} />
                                    </span>
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