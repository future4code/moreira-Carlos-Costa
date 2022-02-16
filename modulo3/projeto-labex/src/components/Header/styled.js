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
        display: flex;
        flex-direction: row;
        align-items: center;
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
    .menu_icon {
    display: none;
    }

    @media screen and (max-width: 960px){
    .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 100px;
        left: -120%;
        opacity: 1;
        transition: all 0.5s ease;
      }
    
      .nav-menu.active {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 100px;
        left: 10%;
        opacity: 1;
        transition: all 0.5s ease;
        z-index:1;
      }
    .menu_icon {
        position: absolute;
        top: 10px;
        right: 10px;
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
      }
    
    
`
