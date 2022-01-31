import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { Container, Links } from './styled'

import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineAdd } from 'react-icons/md'


class PlayList extends Component {

    deletePlayList = () => {

    }

    render() {
        return (
            <>
                <Links>
                    <Link className="btn_addPlayList" to="/addplaylist">
                        <button>Add PlayList</button>
                    </Link>
                </Links>

                <Container>

                    <div className="playlist">
                        {this.props.playLists.map(response => (
                            <ul>
                                <li>
                                    <div style={{ position: 'relative' }} onClick={() => { this.props.getPlayListById(response.id) }}>
                                        <span className="icons">
                                            <Link to={`/addmusic/${response.id}`}>
                                                <MdOutlineAdd className="add_icon" />
                                            </Link>
                                            <AiOutlineDelete className="delete_icon" onClick={() => { this.props.deletePlayList(response.id) }} />
                                        </span>

                                        {response.name}
                                    </div>
                                </li>
                            </ul>

                        ))}
                    </div>
                </Container>
            </>
        );
    }
}

export default PlayList;