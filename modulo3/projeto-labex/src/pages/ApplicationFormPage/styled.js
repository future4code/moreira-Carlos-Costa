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
export const ContainerMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    
`
export const ContainerPlanet = styled.div`
    margin: 50px auto;
    width: 90%;
    max-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color:#FFFFFF;
        font-size: 5rem;
    }
    img {
        width: 60%; 
        animation: rotate 200s linear infinite;
    }
    
    @keyframes rotate {
		from {
			transform: rotate(0deg);
		
        }to {
			transform: rotate(359deg);
		}
	}

`
export const ContainerLogin = styled.div`
    margin: 50px auto;
    width: 90%;
    height: 100%;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);
    
`
export const ContainerInput = styled.div`
    display: flex;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    border-radius: 4px;

    form{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    
    
    input {
        min-width: 90%;
        padding: 24px;
        border: 1px solid #ccc;
        margin: 10px;
        color: #6C7A89;
        font-weight: bold;
        border-radius: 4px;
        
    }
    select {
        min-width: 90%;
        padding: 24px;
        border: 1px solid #ccc;
        margin: 10px;
        color: #6C7A89;
        font-weight: bold;
        border-radius: 4px;
        background-color:#FFFFFF;
    }
    button {
        min-width: 40%;
        padding: 18px;
        font-weight: bold;
        font-size: 1.4rem;
        margin-top: 50px;
        text-transform: uppercase;
        cursor: pointer;
        border: 0;
        border-radius: 4px;
    }

`