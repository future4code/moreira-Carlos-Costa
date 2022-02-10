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
`