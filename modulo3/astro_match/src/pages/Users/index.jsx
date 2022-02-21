import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import { Layout, Card } from 'antd';
import PuffLoader from "react-spinners/PuffLoader";
import AnimationData from '../../components/Animacao/anima'; 

import Zoom from 'react-reveal/Zoom';

import { Container, Details, Match } from './styled';

import { TiDeleteOutline, TiHeartOutline  } from 'react-icons/ti'
import { AiFillLike, AiFillDislike, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'

import api from "../../components/services/api"

const Users = () => {

    const [profile, setprofile] = useState([]);
    const [choose, setChoose] = useState(false);
    const [loading, setLoading] = useState(true);
    const [animation, setAnimation] = useState(false);
  

    const { Content } = Layout;

    useEffect(() => {
        getData()
    }, []);
    const getData = () => {
        api.get(`person`)
        .then((res) => {
        setLoading(false)
        setprofile(res.data.profile);
        })
        .catch((err) => {
        console.log(err);
    });
    };
    const matchOk = () => {
        const body = { id: profile.id, choice: true };
        api.post(`choose-person`,
            body
        )
        .then((res) => {
            setChoose(res.data);
            getData();
        })
        .catch((err) => {
            console.log(err);
            alert("Ocorreu um problema");
        });
    };
    const getRandom = (min, max) => {
        min = Math.ceil(30);
        max = Math.floor(100);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const numberMatch = getRandom();
    
    const handleClick = () => {

        setAnimation(!animation)
        setTimeout(() => {
            setAnimation(animation);
            matchOk()
        }, 2000);
      };
    return (
        <>
            <Layout>
                <Content>
                    <Container style={{position: 'relative'}}>
                        <div className="header">
                            <Link to="/">
                                <MdOutlineArrowBackIosNew className="icons_users"/>
                            </Link>
                            <p>AstroMatch</p>
                            <Link to="/matches">
                                <AiOutlineUsergroupAdd className="icons_users"/>
                            </Link>
                        </div>
                        <Zoom >
                        {
                        loading ? (
                            <div style={{position: 'absolute', top: 300, left:"40%", right: "50%",backgroud: "#FFFFFF"}}>
                                < PuffLoader />
                            </div>
                            
                        ): (
                            <Card
                                className="card_img"
                                cover={
                                    <img
                                        src={profile.photo}
                                        alt={profile.name}
                                    />
                                }
                                actions={[
                                    <TiDeleteOutline onClick={() => getData()} className="icon_deslike" key="setting" />,
                                    <TiHeartOutline onClick={ handleClick } className="icon_like" key="ellipsis" >
                                        {animation ? "Hide" : "Show"}
                                    </TiHeartOutline>
                                ]}
                            >   
                                <Zoom >
                                    <div className="animation">
                                        {animation && <AnimationData/>}
                                    </div>
                                </Zoom>
                                
                                <Details>
                                    <div className="description">
                                        <p>{profile.name}</p>{','}
                                        <span>{profile.age}</span>
                                    </div>
                                    <p className="bio">{profile.bio}</p>
                                </Details>
                                <Match>
                                    {numberMatch >= 50 ? (
                                        <div>
                                            < AiFillLike style={{fontSize: 50, color: "#FFFFFF"}}/>
                                            <p>Você e {profile.name} tem {numberMatch}% de Matching</p>
                                            < FaHeart style={{fontSize: 50, color: " rgba(236, 88, 115, 0.74)"}}/>
                                        </div>
                                        
                                    ):(
                                        <div>
                                            <AiFillDislike style={{fontSize: 50, color: "#FFFFFF"}}/>
                                            <p>Que pena Você e {profile.name} tem {numberMatch}% de Matching</p>
                                            < FaHeartBroken style={{fontSize: 50, color: " rgba(236, 88, 115, 0.74)"}}/>
                                        </div>
                                        
                                    )}
                                </Match>
                            </Card>
                        )}    
                        </Zoom>
                    </Container>
                </Content>
            </Layout>
        </>
    );
}

export default Users;
