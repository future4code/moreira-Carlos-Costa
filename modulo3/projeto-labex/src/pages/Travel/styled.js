import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    

    h1 {
        margin-top:200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color:#FFFFFF;
    }
    .loading {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

    }
    .loading img {
        width: 20%;
    } 
    h1 span {
        width: auto;
        margin-left: 30px;
        transform: rotate(90deg);
        font-size:2rem;
    }
`
export const Background = styled.div`
    height: 100vh;

`
export const ContainerMain = styled.div`
    color: #FFFFFF;
    display: flex;
    height: 100px;
    align-items:center;
    justify-content: space-evenly;
    text-transform: uppercase;
    

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;

    letter-spacing: 4.725px;

    ul {
        list-style: none;
        display: flex;
    }
    li {
        font-size: 1rem;
        padding: 0.8rem;
        font-style: normal;
        line-height: 34px;

        letter-spacing: 4.725px;
        cursor: pointer;
        
    }
    
`
export const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    padding: 0.8rem;
    margin-top: 8rem;
`
export const MainLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
        animation: rotate 200s linear infinite;
    }
    
    @keyframes rotate {
				from {
					transform: rotate(0deg);
				}

				to {
					transform: rotate(359deg);
				}
			}

   
`
export const MainRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    width: 80%;
    margin:  0 auto;
    
    span {
        font-family: "Bellefair";
        font-style: normal;
        font-weight: normal;
        font-size: 100px;
        line-height: 115px;
        /* identical to box height */


        color: #FFFFFF;
    }
    p {
        width: 90%;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 32px;

        color: #D0D6F9;
    }

    .button {
        display: flex;
        justify-content:center;
        align-items:center;
        height:90px;
        width: 90%;
        
    }
    .button button{
        margin-top: 50px;
        display: flex;
        justify-content:center;
        align-items:center;
        height:40px;
        width:200px;
        border: 0;
        background: #D0D6F9;
        border-radius: 2px;
        cursor: pointer;
    }

`
export const MainFooter = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;


    .titulo{
        width: 100%;
        font-family: "Barlow";
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 32px;
        /* identical to box height */

        text-transform: uppercase;
    }
    p {
        width: 100%;
        font-family: "Bellefair";
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 2px;
        /* identical to box height */

        text-transform: uppercase;
    }
`
