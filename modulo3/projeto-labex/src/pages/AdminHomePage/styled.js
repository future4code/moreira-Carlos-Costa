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
export const ContainerAdminHomePage = styled.div`
    margin: 50px auto;
    width: 70%;
    height: 70%;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 4px;
    

`
export const ContainerCard = styled.div`
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 0px;

`
export const CardTravel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    ul {
        list-style: none;
        width: 100%;
        
    }
    li {
        margin: 12px auto;
        width:50%;
        display: flex;
        height: 80px;
        color: #FFFFFF;
        background-color:#303035;
        padding: 12px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px;
        font-weight: bold;
        transition: transform .2s;
        cursor:pointer;

        &:hover {
            transform: scale(1.1);
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
    }


`