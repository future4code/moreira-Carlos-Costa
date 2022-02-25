import React, { useState, useEffect } from 'react'
import { usePrivateRoute } from '../../hooks/usePrivateRoutes'
import Header from '../../components/Header'

import CommentTextArea from '../../components/TextArea'
import Comments from '../../components/Comments'

import { Link } from 'react-router-dom'

import { Container, ContainerPost, Icon, Input, ContainerGrid, SectionFedds, SectionRight, Button } from './styled'

import api from '../../services/api'

import { List, Avatar, message, Drawer, Comment, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import { AiOutlineReddit, AiOutlineApi, AiOutlineComment } from 'react-icons/ai'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg'

import moment from 'moment'
import 'moment/locale/pt-br'

const Feeds = () => {
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(false);

    const [comentarios, setComentarios] = useState([])
    const [handleInput, setHandleInput] = useState()

    usePrivateRoute()
    const token = localStorage.getItem('token')

    useEffect(() => {
        api.get(`posts/?page=1&size=100`, { headers: { Authorization: token } })
            .then((res) => {
                setPosts(res.data)
            }).catch((error) => {
                console.log(error.response.data)
            })
            
    }, []);

    const key = 'updatable';
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    const votePost = async (vote, id) => {
        const body = {
            "direction": vote
        }

        api.put(`posts/${id}/votes
            `, body, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            message.loading({ content: 'Processando...', key });
            setTimeout(() => {
                message.success({ content: 'Curtida enviadoa com sucesso!', key, duration: 2 });

            }, 1000);
        }).catch((error) => {
            setTimeout(() => {
                message.success({ content: `${error.response.data}`, key, duration: 2 });

            }, 1000);
        })

    }
    const createComment = (id) => {

        const body = {
            body: handleInput
        }
        api.post(`posts/${id}/comments`, body, { headers: { Authorization: token } })
            .then((res) => {
                message.loading({ content: 'Processando...', key });
                setTimeout(() => {
                    message.success({ content: 'Comentário criado com sucesso!', key, duration: 2 });

                }, 1000);
                setVisible(false)
                setHandleInput('')
            }).catch((error) => {
                console.log(error)
            })
    }

    const getCommentId = (id) => {

        api.get(`posts/${id}/comments`, { headers: { Authorization: token } })
            .then((res) => {
                setComentarios(res.data)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }
    const inputText = (e) => {
        setHandleInput(e.target.value)
    }

    const onClose = () => {

        setVisible(false)

    }
    
    moment.locale('pt-br')

    return (

        <>
            <Container>
                <Header />
                <ContainerPost>
                    <Icon>
                        <AiOutlineReddit />
                    </Icon>
                    <Link to='/post'>
                        <Input placeholder="Postar" />
                    </Link>
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
                    <SectionFedds>
                        <>
                            <List
                                size="large"
                                pagination={{
                                    
                                    pageSize: 5,
                                }}
                                dataSource={posts}
                                bordered
                                renderItem={item => (
                                    <>
                                        <List.Item
                                            key={item.id}
                                            actions={[

                                                <Button onClick={() =>  {getCommentId(item.id, setVisible(true))}}>Comentar</Button>
                                                
                                            ]}
                                        >

                                            <Comment
                                                author={
                                                    <span>
                                                        <p>{item.username}</p>
                                                        <p>postado: {moment(`${item.createdAt}`).fromNow()}</p>
                                                    </span>

                                                }
                                                avatar={
                                                    <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="Han Solo" />}
                                                content={[
                                                    <p style={{ fontWeight: 'bold' }}>{item.title}</p>,
                                                    <p style={{ color: '#84868a',width: '70vw' }}>{item.body}</p>
                                                ]}
                                                actions={[

                                                    <IconText icon={MessageOutlined} text={item.commentCount} key="list-vertical-message" />,
                                                ]}

                                            />
                                            
                                        </List.Item>
                                        <Drawer
                                            width={640}
                                            placement="right"
                                            closable={false}
                                            onClose={onClose}
                                            visible={visible}
                                        >
                                            <CommentTextArea
                                                placeholder={'Digite aqui seu comentario!'}
                                                required
                                                type={'text'}
                                                name={'comentario'}
                                                value={handleInput}
                                                onChange={inputText}
                                            />
                                            <Button onClick={() => { console.log(createComment(item.id)) }}>Criar Comentário</Button>
                                            <Comments
                                                comments={comentarios}
                                            />
                                        </Drawer>

                                    </>
                                )}
                            />

                        </>
                    </SectionFedds>
                </ContainerGrid>
            </Container>
        </>
    );
}

export default Feeds;
