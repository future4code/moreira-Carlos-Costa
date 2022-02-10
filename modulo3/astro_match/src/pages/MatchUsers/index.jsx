import React,{useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import axios from 'axios';

import { Container } from './styled';

import { MdOutlineArrowBackIosNew, MdMoreVert } from 'react-icons/md'

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const MatchUsers = () => {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [matches]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Carlos-Henrique/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Carlos-Henrique/clear"
      )
      .then((res) => {
        setMatches([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Fade left>
        <div className="header">
          <Link to="/users">
            <MdOutlineArrowBackIosNew style={{fontSize: "30px", cursor: "pointer", color: "#FFFFFF"}}/>
          </Link>
          <p>Meus Matching</p>
          <MdMoreVert style={{fontSize: "30px", cursor: "pointer"}}/>
        </div>
        <div className="main"> 
          {matches.map((match) => {
            return (
              <Bounce>
                <div className="match_card">
                  <img src={match.photo} alt={"foto perfil"} />
                  <span className="name">{match.name},</span>
                  <span className="age">{match.age}</span>
                </div>
              </Bounce>
            );
          })}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              deleteMatches();
            }}
            >
            {" "}
            Limpar Matches{" "}
          </button>
        </div>  
      </Fade>
    
    </Container>
  );
}

export default MatchUsers;
