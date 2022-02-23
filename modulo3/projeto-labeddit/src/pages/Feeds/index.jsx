import React from 'react'
import { usePrivateRoute } from '../../hooks/usePrivateRoutes'
import Header from '../../components/Header'

import { Container, ContainerPost, Icon, Input, ContainerGrid, SectionFedds, SectionRight } from './styled'

import { AiOutlineReddit, AiOutlineApi } from 'react-icons/ai'
import { MdOutlineInsertPhoto } from 'react-icons/md'
const Feeds = () => {
    usePrivateRoute()
    return (
        <Container>
            <Header />
            <ContainerPost>
                <Icon>
                    <AiOutlineReddit />
                </Icon>
                <Input placeholder="Postar" />
                <Icon>
                    <MdOutlineInsertPhoto />
                </Icon>
                <Icon>
                    <AiOutlineApi />
                </Icon>
            </ContainerPost>
            <ContainerPost>
            </ContainerPost>
            <ContainerGrid>
                <SectionFedds>oi</SectionFedds>
                <SectionRight>
                    oi
                </SectionRight>
            </ContainerGrid>
        </Container>
    );
}

export default Feeds;
