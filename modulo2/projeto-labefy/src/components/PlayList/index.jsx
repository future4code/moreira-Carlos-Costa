import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { Container } from './styled'


class PlayList extends Component {

    render() {
        return (
            <Container>
                <Link className="btn_addPlayList" to="/addplaylist">
                    <button>Add PlayList</button>
                </Link>
                <div className="playlist">
                    {this.props.playLists.map(response => (
                        <ul>
                            <li>
                                <div onClick={() => { this.props.getPlayListById(response.id) }}>
                                    {response.name}
                                </div>
                            </li>
                        </ul>

                    ))}
                </div>
            </Container>
        );
    }
}

export default PlayList;