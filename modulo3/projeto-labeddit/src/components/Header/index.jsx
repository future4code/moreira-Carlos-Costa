import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Ul, Li, Icon } from './styled'
import { Tooltip } from 'antd';

import {
    
    AiOutlineLogout,
    AiFillRedditCircle,
    
} from 'react-icons/ai'


const Header = () => {

    const history = useNavigate()

    const handleLogout = () => {
        localStorage.clear();

        history('/')
    }

    
    return (
        <Container>
            <Ul>
                <Li style={{ fontSize: '1.2rem', color: '#FF4500' }}>
                    <AiFillRedditCircle style={{ fontSize: '1.8rem' }} />
                    <span>LabEddit</span>
                </Li>
                <Li>
                </Li>
                <Li>
                    <Icon>
                        <Tooltip placement="top" title={'Sair'}><AiOutlineLogout onClick={()=> {handleLogout()}}/></Tooltip>
                    </Icon>
                </Li>
            </Ul>
        </Container>
    );
}

export default Header;
