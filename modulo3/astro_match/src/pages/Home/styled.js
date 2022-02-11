import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: #EC5873;
    display: flex;
    flex-direction: column;
    justify-content:  space-evenly;
    align-items: center;
    margin: 100px auto;
    width: 80%;
    height: 80vh;
    border-radius: 20px;
    padding: 10px;

    img {
        width: 30%;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
    }
    div h1 {
        font-size: 3.2rem;
        color: #FFFFFF;
    }
    div p {
        font-size: 1.5rem;
        color: #FFFFFF;
    }
    .button button {
        width: 100%;
        border: 0;
        border-radius: 8px;
        background-color: #3D3D3D;
        color: #FFFFFF;
        font-size: 1.4rem;
        padding: 10px 30px;
        cursor: pointer;
    }
    /* 
##Device = Tablets, Ipads (portrait)
##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    width: auto;
    height: 100vh;
    margin: 0;
    border-radius:0;
    text-align: center;
    img {
        width: 60%;
    }
    div h1 {
        font-size: 2rem;
        color: #FFFFFF;
    }
    div p {
        font-size: 1rem;
        color: #FFFFFF;
    }
}

/* 
##Device = Tablets, Ipads (landscape)
##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: flex;
    width: auto;
    height: 100vh;
    margin: 0;
    border-radius:0;
    text-align: center;
    img {
        width: 30%;
    }
    div h1 {
        font-size: 2rem;
        color: #FFFFFF;
    }
    div p {
        font-size: 1rem;
        color: #FFFFFF;
    }
}

/* 
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
*/
@media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    width: auto;
    margin:0;
    padding-top: 10px;
    height: 100vh;
    border-radius:0;
    text-align: center;
    img {
        width: 40%;
    }
    div h1 {
        font-size: 2rem;
        color: #FFFFFF;
    }
    div p {
        font-size: 1rem;
        color: #FFFFFF;
    }
}

/* 
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    width: auto;
    height: 100vh;
    margin: 0;
    border-radius:0;
    text-align: center;
    img {
        width: 100%;
    }
    div h1 {
        font-size: 2rem;
        color: #FFFFFF;
    }
    div p {
        font-size: 1rem;
        color: #FFFFFF;
    }
}

`
