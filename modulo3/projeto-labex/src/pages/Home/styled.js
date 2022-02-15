import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`
export const Background = styled.div`
    background-color: #0B0D17;
    height: 100vh;
    color: #FFFFFF;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;

    img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }

`
export const Main = styled.div`

    width: 100%;
    display: flex;
    flex-direction:column;
    color: #FFFFFF;
    position: absolute;
    top: 0;

    .container_main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 80vh;
        
    }

`
export const MainLeft = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width: 50%;
    height: 40vh;

    div {
        display: flex;
        flex-direction:column;
        width: 60%;
        height: 40vh;
        justify-content: center;
        
    }
    div h4 {
        font-family: Barlow Condensed;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 8px;
        /* identical to box height */

        letter-spacing: 4.725px;

        color: #D0D6F9;

    }
    div h1 {
        font-family: Bellefair;
        font-style: normal;
        font-weight: normal;
        font-size: 150px;
        line-height: 8px;
        /* identical to box height */


        color: #FFFFFF;
    }

    div p {
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        /* or 178% */


        color: #D0D6F9;
    }

        
`
export const MainRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    span {
       
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        background-color: #FFFFFF;
        color: #0B0D17;
        width: 200px;
        height:200px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            width: 210px;
            height: 210px;
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
    }

`
