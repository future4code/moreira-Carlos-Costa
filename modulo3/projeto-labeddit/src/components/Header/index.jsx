import React from 'react';

import { Container, Ul, Li, Input, Icon } from './styled'
import { Tooltip } from 'antd';


import {
    AiOutlineVideoCameraAdd,
    AiOutlineMessage,
    AiOutlineAlert,
    AiOutlinePlus,
    AiOutlineUser,
    AiFillRedditCircle,
    AiOutlineDown,
    AiOutlineSearch
} from 'react-icons/ai'
const Header = () => {
    return (
        <Container>
            <Ul>
                <Li style={{ fontSize: '1.2rem', color: '#FF4500' }}>
                    <AiFillRedditCircle style={{ fontSize: '1.8rem' }} />
                    <span>LabEddit</span>
                </Li>
                <Li style={{ position: 'relative' }} >
                    <Input type="text" placeholder="Buscar no LabEddit" />
                    <AiOutlineSearch style={{ position: 'absolute', right: 50, fontSize: '1.4rem' }} />
                </Li>
                <Li>
                    <Ul>
                        <Li>
                            <Icon>
                                <Tooltip placement="top" title={'Videos'}><AiOutlineVideoCameraAdd /></Tooltip>
                            </Icon>

                        </Li>
                        <Li>
                            <Icon>
                                <Tooltip placement="top" title={'Chat'}><AiOutlineMessage /></Tooltip>
                            </Icon>

                        </Li>
                        <Li>
                            <Icon>
                                <Tooltip placement="top" title={'Notificação'}><AiOutlineAlert /></Tooltip>
                            </Icon>

                        </Li>
                        <Li>
                            <Icon>
                                <Tooltip placement="top" title={'Post'}><AiOutlinePlus /></Tooltip>
                            </Icon>

                        </Li>
                    </Ul>
                </Li>
                <Li style={{ fontSize: '1.4rem' }}>
                    <Icon>
                        <Tooltip placement="top" title={'Usuário'}><AiOutlineUser /></Tooltip>
                    </Icon>

                    <Icon>
                        <AiOutlineDown />
                    </Icon>

                </Li>
            </Ul>
        </Container>
    );
}

export default Header;
