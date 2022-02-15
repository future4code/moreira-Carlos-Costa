import styled from "styled-components"

export const Container = styled.div`
    height: 10vh;
    color: #FFFFFF;
    padding: 0 50px;
    
    ul {
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        list-style: none;
        color: #FFFFFF;
    }
    .links {
        display: flex;
        flex-direction: row;
        justify-content:end;
        align-items:center;
        width: 50%;
        height: 80px;
        padding: 0 50px;
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);

    }
    li{
        
        padding: 0 50px;
        font-weight: bold;
        color: #FFFFFF;
        text-transform: uppercase;
        list-style: none;
        text-decoration: none;


    }
    .active {
        padding: 0 0 20px 0;
        border: 0;
        border-bottom: 1px solid #FFFFFF;
    }
    
`
