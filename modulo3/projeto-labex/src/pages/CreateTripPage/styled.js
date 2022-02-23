import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    
    
`
export const Background = styled.div`
    height: 100%;
    

`
export const ContainerMain = styled.div`
    margin: 50px auto;
    width: 70%;
    height: 65%;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);
    

`
export const ContainerIcon = styled.div`
        display: flex;
        align-items: center;
        margin: 20px;
        font-size: 1.4rem;
        color: #ffffff;
        cursor: pointer;

`
export const Fields = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    min-width: 80%;
    height: 70%;
    border-radius: 4px;
    padding: 20px;

`;

export const Input = styled.input`
    min-width: 50%;
    padding: 24px;
    border: 1px solid #ccc;
    margin: 10px;
    color: #6C7A89;
    font-weight: bold;
  }
`;
export const Select = styled.select`
    min-width: 50%;
    padding: 24px;
    border: 1px solid #ccc;
    margin: 10px;
    color: #6C7A89;
    font-weight: bold;
`;
export const Button = styled.button`
    min-width: 30%;
    padding: 18px;
    font-weight: bold;
    font-size: 1.4rem;
    margin-top: 50px;
    text-transform: uppercase;
    cursor: pointer;
`
