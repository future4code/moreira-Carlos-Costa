import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    
`
export const Content = styled.div`
    position: relative;
    display: grid;
    padding: 30px 50px;
    grid-template-columns:2fr 1fr;
    gap: 50px;
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    
`
export const CommentTextArea = styled.form`
    border: 1px solid #ccc;
    height: 80%; 
    background-color:#FFFFFF;
    padding: 30px;
    
`
export const InputTitle = styled.input`
    margin-bottom: 50px;
    border: 1px solid #ccc;
    width: 100%; 
    background-color:#FFFFFF;
    padding: 10px;
    
`
export const Rules = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ccc;
    height: 80%; 
    background-color:#FFFFFF;
    
    
`
export const H2 = styled.h2`
    color: #FFFFFF;
    font-size: bold;
    
`
export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    
`
export const Ol = styled.ol`
    margin: 10px 10px;
    
`
export const Li = styled.li`
    width: 95%;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-weight: bold;
    
`
export const P = styled.p`
    width: 95%;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 10px;
    font-weight: 500;
    margin: 10px 10px;
    
`
export const Button = styled.button`
    margin: 10px auto;
    width: 40%;
    height:40px;
    border: 0;
    background-color: #000000;
    color: #FFFFFF;
    cursor: pointer;


    
`
