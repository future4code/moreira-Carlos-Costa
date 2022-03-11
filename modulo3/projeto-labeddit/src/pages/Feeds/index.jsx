import React, { useState, useEffect } from 'react'
import { usePrivateRoute } from '../../hooks/usePrivateRoutes'
import Header from '../../components/Header'

import { useNavigate, Link} from 'react-router-dom'

import { Container, ContainerPost, Icon, Input, ContainerGrid, SectionFedds, ContainerVotes, ButtonStyle } from './styled'

import api from '../../services/api'

import { List, Avatar, message, Comment, Space, Spin} from 'antd';
import { MessageOutlined, LoadingOutlined } from '@ant-design/icons';

import { AiOutlineReddit, AiOutlineApi, AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg'

import moment from 'moment'
import 'moment/locale/pt-br'

const Feeds = () => {
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(false);
    const [ search, setSearch ] = useState('')

    usePrivateRoute()
    const token = localStorage.getItem('token')
    const history = useNavigate()

    useEffect(() => {
        api.get(`posts/?page=1&size=150`, { headers: { Authorization: token } })
            .then((res) => {
                setPosts(res.data)
            }).catch((error) => {
                console.log(error.response.data)
            })
            
    }, [token, posts]);

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    const key = 'updatable';
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    )

    const votePost = async (vote, id) => {
        const body = {
            "direction": vote
        }

        api.put(`posts/${id}/votes`, body, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            message.loading({ content: 'Processando...', key });
            setTimeout(() => {
                message.success({ content: 'Seu voto foi enviada com sucesso!', key, duration: 2 });
                
            }, 1000);
        }).catch((error) => {
            setTimeout(() => {
                message.success({ content: `${error.response.data}`, key, duration: 2 });
                
            }, 1000);
        })

    }

    const DeletePostVote = (id) => {
        api.delete(`posts/${id}/votes`, { headers: { Authorization: token } })
            .then((response) => {
                message.loading({ content: 'Processando...', key });
                setTimeout(() => {
                    message.success({ content: 'Voto foi deletado com sucesso!', key, duration: 2 });

                }, 1000);
                setVisible(false)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    moment.locale('pt-br')

    const filteredPost = posts.filter(result => {
		return result.username.toLowerCase().includes(search.toLowerCase())
	
	})
    return (

        <>
            <Container>
                <Header 
                posts={posts}
                />
                <ContainerPost>
                    
                   
                        <Input onClick={() =>{history('/post')}}placeholder="Postar" />
                    
                    
                </ContainerPost>
                <ContainerPost>
                    <Input 
                    type="text" 
                    placeholder="Buscar no LabEddit" 
                    onChange={e => setSearch(e.target.value)}
                    
                    />
                    <AiOutlineSearch style={{ position: 'absolute', right: 80, fontSize: '1.4rem' }} />
                </ContainerPost>
                <ContainerGrid>
                    <SectionFedds>
                        <>
                            {posts.length === 0 ? (
                        
                            <Spin indicator={antIcon} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50}} />
                            )
                            : 
                            (
                            <List
                                size="large"
                                pagination={{
                                    
                                    pageSize:5,
                                }}
                                dataSource={filteredPost}
                                bordered
                                renderItem={item => (
                                    <>                                    
                                        <List.Item
                                            key={item.id}
                                            actions={[
                                                <Link to={`comments/${item.id}`}>
                                                <ButtonStyle>Comentar</ButtonStyle>
                                                </Link>
                                                
                                                
                                            ]}
                                            
                                        >
                                            <ContainerVotes>
                                                <CgArrowUpR style={{cursor: 'pointer'}} onClick={item.userVote === null ? () => {votePost(1, item.id)} : () => {DeletePostVote(item.id)}}/> 
                                                {item.voteSum}
                                                <CgArrowDownR style={{cursor: 'pointer'}} onClick={item.userVote === null ? () => {votePost(-1, item.id)} : () => {DeletePostVote(item.id)}}/>
                                            </ContainerVotes> 
                                            <Comment
                                                author={
                                                    <span>
                                                        <p>{item.username}</p>
                                                        <p>postado {moment(`${item.createdAt}`).fromNow()}</p>
                                                    </span>

                                                }
                                                avatar={
                                                    <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="Han Solo" />}
                                                content={[
                                                    <p style={{ fontWeight: 'bold', width: '70vw' }}>{item.title}</p>,
                                                    <p style={{ color: '#84868a',width: '70vw' }}>{item.body}</p>
                                                ]}
                                                actions={[

                                                    <IconText icon={MessageOutlined} text={item.commentCount} key="list-vertical-message" />,
                                                ]}

                                            />                                          
                                        </List.Item>
                                    </>
                                )}
                            />
                            
                            )}
                        </>
                    </SectionFedds>
                </ContainerGrid>
            </Container>
        </>
    );
}

export default Feeds;
