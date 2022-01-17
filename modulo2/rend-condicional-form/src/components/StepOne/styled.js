import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color:snow;
    height:80vh;
    margin: 0 auto;
    width:70%;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding-top: 40px;
`
export const Form = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    flex-direction: column;
    align-items: center;

    ul {
        list-style: none;
        text-align: center;
        padding: 10px;
        width: 80%;
    }

    li {
        padding: 10px;
    }
    
`
export const Button = styled.button`
   background-color:grey;

`