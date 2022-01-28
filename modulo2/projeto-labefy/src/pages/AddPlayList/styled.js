import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction:column;
    background-color: #6C7A89;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    div {
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        width: 100%;
    }
    input {
        width: 50%;
        height: 40px;
        padding:10px;
        border-radius: 4px;
        border:0;
    }
    button {
        width: 40%;
        height: 40px;
        margin-top: 20px;
        cursor: pointer;
    }
    .btn_back{
        width: 20%;
        height: 40px;
        margin-left: 100px;
        border-radius: 4px;
        border:0;

    }
`