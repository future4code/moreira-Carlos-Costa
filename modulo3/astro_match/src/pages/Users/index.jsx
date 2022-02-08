import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Card } from './styled'


const Useers = () => {

    const [profile, setprofile] = useState([]);

    useEffect(() => {
        getProfile();
      }, []);

    const getProfile = () => {
      axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
        )
        .then((res) => {
          setprofile(res.data.profile);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
      
    return (
        <div>
            <Container>
                <div className="container_img">
                    <img src={profile.photo} alt="" />
                </div>
            </Container>
        </div>
    );
}

export default Useers;
