import React from 'react';
import { Container} from './styled'
import img from "../../assets/animation_500_kzpue42w.gif"
import BackgroundImg from "../../assets/background1.svg"
const NotFound = () => {
    return (
        <Container style={{ backgroundImage: `url(${BackgroundImg})`,height:'100vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <img src={img} alt="img" />
        </Container>
    );
}

export default NotFound;
