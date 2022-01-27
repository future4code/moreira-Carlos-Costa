import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 50vh;
    color: grey;
    padding: 10px;
    
    button {
        width: 20%;
        height: 60px;
        background-color: #FFFFFF;
        border: 0;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
    }
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        align-items: center;
        justify-content: space-around;
    }

    li div {
        display: flex;
        margin: 20px;
        width: 20vw;
        height: 30vh;
        background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
        color: #FFFFFF;
        font-weight: bold;
        font-size: 26px;
        border-radius: 20px;
        padding: 10px;

        flex-direction: column;
        align-content: space-around;
        justify-content: space-around;
        align-items: center;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
    }
`