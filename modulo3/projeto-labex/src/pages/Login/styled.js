import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    
    
`
export const Background = styled.div`
    height: 100vh;
    

`
export const ContainerLogin = styled.div`
    margin: 50px auto;
    width: 70%;
    height: 70%;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);
    

`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    min-width: 80%;
    height: 80%;
    border-radius: 4px;
    padding: 20px;

   form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 80%;
    height: 80%;
    padding: 20px;
   }
    
    
    input {
        min-width: 50%;
        padding: 24px;
        border: 1px solid #ccc;
        margin: 10px;
        color: #6C7A89;
        font-weight: bold;
        
    }
    button {
        min-width: 30%;
        padding: 18px;
        font-weight: bold;
        font-size: 1.4rem;
        margin-top: 50px;
        text-transform: uppercase;
        cursor: pointer;
    }

`