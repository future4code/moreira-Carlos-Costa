import styled from 'styled-components'

export const Container = styled.div`
 background-color:#EC5873;
 width: 70%;
 height: 80vh;
 margin: 100px auto;
 border-radius: 74px;

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 .container_logo img{
    width: 100%;
 }
 .container_main h1{
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 75px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

 }
 .container_main {
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 .container_main p {
     margin-top: -20px;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;

    color: #FFFFFF;

 }
 .btn_primary button {
    width : 100%;
    height: 80px;
    background: #3D3D3D;
    border-radius: 18px;
    border: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 41px;

    color: #FFFFFF;
    padding: 0 20px;
    cursor: pointer;

 }
 @media(max-width: 800px) {
    background-color:#EC5873;
    width: 100%;
    height: 100vh;
    margin: 0;
    border-radius:0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

   .container_main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        padding: 10px;
    }
    .container_main h1{
    font-style: normal;
    font-weight: bold;
    width: 80%;
    font-size: 2.5rem;
    line-height: 50px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

 }
    .container_main p {
        margin-top: -20px;
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;

        color: #FFFFFF;

 }
    .container_main button {
        width : 90%;
        height: 70px;
        border-radius: 20px; 

    }
 }
`