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

 .container_img {
    width: 400px;
    height: 400px;

 }
 .container_img img{
    width: 400px;
    height: 400px;
    object-fit: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: matrix(1, 0, 0, 1, 0, 0);
     
}

 
 `
