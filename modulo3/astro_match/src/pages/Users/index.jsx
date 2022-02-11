import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { Layout, Card } from 'antd';

import Zoom from 'react-reveal/Zoom';

import { Container, Details, Match } from './styled';

import { TiDeleteOutline, TiHeartOutline  } from 'react-icons/ti'
import { AiFillLike, AiFillDislike, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'

const Users = () => {
    const [profile, setprofile] = useState([]);
    const [choose, setChoose] = useState(false);
  

    const { Content } = Layout;

    useEffect(() => {
        getData()
    }, []);
    const getData = () => {
        axios
        .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Carlos-Henrique/person`
        )
        .then((res) => {
        setprofile(res.data.profile);
        })
        .catch((err) => {
        console.log(err);
    });
    };
    const matchOk = () => {
        const body = { id: profile.id, choice: true };
        axios
        .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Carlos-Henrique/choose-person",
            body
        )
        .then((res) => {
            alert("Você deu um match");
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

    return (
        <>
            <Layout>
                <Content style={{position: 'relative'}}>
                    <Container>
                        <div className="header">
                            <Link to="/">
                                <MdOutlineArrowBackIosNew className="icons_users"/>
                            </Link>
                            <p>AstroMatch</p>
                            <Link to="/matches">
                                <AiOutlineUsergroupAdd className="icons_users"/>
                            </Link>
                        </div>
                        <Zoom>
                            <Card
                                className="card_img"
                                cover={
                                    <img
                                        src={profile.photo}
                                        alt={profile.name}
                                    />
                                }
                                actions={[
                                    <TiDeleteOutline onClick={() => getData()} className="icons" key="setting" />,
                                    <TiHeartOutline onClick={() => matchOk()} className="icons" key="ellipsis" />,
                                ]}
                            >
                                
                                <Details>
                                    <div className="description">
                                        <p>{profile.name}</p>{','}
                                        <span>{profile.age}</span>
                                    </div>
                                    <p className="bio">{profile.bio}</p>
                                </Details>
                                <Match>
                                    {numberMatch > 50 ? (
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
                        </Zoom>
                    </Container>
                </Content>
            </Layout>
        </>
    );
}

export default Users;
