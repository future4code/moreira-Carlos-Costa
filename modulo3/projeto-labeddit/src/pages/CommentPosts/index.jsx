import React, {useState, useEffect} from 'react';
import { Container, Content, CommentTextArea, CommentsPost, Rules, H2,Ul, Ol, Li, Title, P, Button, CardComment,ContainerVotes } from './styled'
import Header from '../../components/Header'

import { useNavigate, useParams } from 'react-router-dom'

import api from '../../services/api'

import { IoReturnUpBackOutline } from 'react-icons/io5'

import { message, Input, Popover, Avatar, Comment, Space } from 'antd';
import { MessageOutlined} from '@ant-design/icons';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg'

import {useForm} from '../../hooks/useForms'
import { usePrivateRoute } from "../../hooks/usePrivateRoutes"

import moment from 'moment'
import 'moment/locale/pt-br'

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)
const CommentPost = () => {
    const [comments, setComments] = useState([])
    const { TextArea } = Input

    usePrivateRoute()
    const history = useNavigate()
    const key = 'updatable'
    const { id } = useParams()

    const {form, onChange, setForm} = useForm({body: ''})
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        api.get(`posts/${id}/comments`,{headers: { Authorization: token }})
        .then(response => (
            setComments(response.data),
            console.log(response.data)
        ))
        .catch(error => {
            console.log(error.data)
        })
    },[])
    const handleCreateComment = async (e) => {
        e.preventDefault()
        
        try {

            message.loading({ content: 'Processando...', key });
                await api.post(`posts/${id}/comments`, form, { headers: { Authorization: token } })

            setTimeout(() => {
                message.success({ content: 'Comentário criado com sucesso!', key, duration: 2 });
                history('/feeds')
                
            }, 1000);
            
        } catch (error) {
            message.loading({ content: 'processando...', key });
            setTimeout(() => {
                message.error({ content: 'Algo deu errado!', key, duration: 2 });
            }, 1000);
            
        }

        
    }
    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    };
    const voteComment = async (vote, id) => {
        const body = {
            "direction": vote
        }

        api.put(`comments/${id}/votes`, body, {
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

    const DeleteCommentVote = (id) => {
        api.delete(`comments/${id}/votes`, { headers: { Authorization: token } })
            .then((response) => {
                message.loading({ content: 'Processando...', key });
                setTimeout(() => {
                    message.success({ content: 'Voto foi deletado com sucesso!', key, duration: 2 });

                }, 1000);
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    let content = (
        <>
            <TextArea
                style={{ height: '70%' }}
                placeholder={'Digite aqui seu comentario!'}
                required
                type={'text'}
                name={'body'}
                value={form.body}
                onChange={handleInputChange}
            />
            <Button type="submit">Criar Comentário</Button>
        </>
    );
    return (
        <Container>
            <Header />
            <Button style={{width: 100, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => history('/feeds')}><IoReturnUpBackOutline style={{fontSize: 20, weight: 800}}/>Voltar</Button>
            <Content>
                <H2 style={{position:'absolute',top: 0, left: 50}}>Comentário</H2>
                <CommentTextArea onSubmit={handleCreateComment}>
                    <TextArea
                        style={{ height: '70%' }}
                        placeholder={'Digite aqui seu comentario!'}
                        required
                        type={'text'}
                        name={'body'}
                        value={form.body}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Criar Comentário</Button>
                </CommentTextArea>
                <Rules>
                    <Ol>
                        <Title>Postando no LabEddit</Title>
                        <Li>Ponha-se no lugar do próximo</Li>
                        <Li>Comporte-se da mesma forma que na vida real</Li>
                        <Li>Procure a fonte original do conteúdo</Li>
                        <Li>Pesquise se o conteúdo já foi postado antes</Li>
                        <Li>Leia as regras da comunidade</Li>
                    </Ol>
                    <P>Por favor, fique atento à política de conteúdo do LabEddit e pratique boa Labeddiqueta.</P>
                </Rules>  
            </Content>
            <CommentsPost>
                 
                {comments.length === 0 ? ( <h4 style={{textAlign: 'center'}}>Esse post ainda não foi comentado</h4> ) : comments.map((res) => (
                    <>
                    <CardComment>
                    
                        <Ul key={res.id}>
                            <Li>
                                <ContainerVotes>
                                    <CgArrowUpR style={{cursor: 'pointer'}} onClick={res.userVote === null ? () => {voteComment(1, res.id)} : () => {DeleteCommentVote(res.id)}}/> 
                                    {res.voteSum}
                                    <CgArrowDownR style={{cursor: 'pointer'}} onClick={res.userVote === null ? () => {voteComment(-1, res.id)} : () => {DeleteCommentVote(res.id)}}/>
                                </ContainerVotes> 
                                <Comment
                                    author={
                                        <span>
                                            <p>{res.username}</p>
                                            <p>postado {moment(`${res.createdAt}`).fromNow()}</p>
                                        </span>

                                    }
                                    avatar={
                                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="Han Solo" />}
                                    content={[
                                        <p style={{ fontWeight: 'bold', width: '70vw' }}>{res.title}</p>,
                                        <p style={{ color: '#84868a', width: '70vw' }}>{res.body}</p>
                                    ]}
                                    actions={[
                                        <Popover placement="bottom" title={'Comentário'} content={content} trigger="click">
                                            <IconText icon={MessageOutlined} text={res.commentCount}/>
                                        </Popover>,
                                    ]}

                                />
                            </Li>
                        </Ul>
                        
                    </CardComment>
                  </>
                    
                ))}
            </CommentsPost>
        </Container>
    );
}

export default CommentPost;
