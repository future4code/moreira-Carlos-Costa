import styled from 'styled-components'

export const Container = styled.div`

`
export const ContainerPost = styled.div`
    margin: 12px 20px;
    height: 60px;
    background-color:#FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 0 20px;
`
export const Input = styled.input`
    width: 90vw;
    padding: 1px 20px;
    margin: 0 20px;
    background-color:#f2f2f2;
    border:0;
    border-radius: 4px;
    &:hover {
        background-color: #FFFFFF;
        border: 1px solid #9D9797;
    }
`
export const Icon = styled.div`
    font-size: 2.5rem;
    color:#9D9797;
    cursor: pointer;
    
    &:hover {
        background-color: #ccc;
        height: 80%;
        border-radius: 10px;
    }
`
export const ContainerGrid = styled.div`
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 40px;
    
   
`
export const SectionFedds = styled.div`
    background-color: #FFFFFF;
    min-height: 70vh;
    border-radius: 4px;
`
export const SectionRight = styled.div`
background-color: #FFFFFF;
border-radius: 4px;
   
`