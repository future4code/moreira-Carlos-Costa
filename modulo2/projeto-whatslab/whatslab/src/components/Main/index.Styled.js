import styled from 'styled-components'

export const ContainerMain = styled.div `
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: start;
    margin-top: -80px;
    background-color:#DED6CE;
    width: 70%;
    height: 94vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    
`
export const ContainerHeader = styled.div `
    display: flex;
    background-color:#EFEFEF;
    padding: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    
`
export const ContainerHeaderImg = styled.img `
    border-radius: 50%;
    
    
`
export const ContainerHeaderIcon = styled.div `

    
`
export const ContainermainMensagem = styled.p `
    display: grid;
    padding: 20px;
    width: 66.7%;
    position: absolute;
    bottom: 80px;
    left: 33.3%;
    
`
export const ContainerHeaderIPut = styled.div `
    display: flex;
    background-color: #DFDFDF;
    padding: 20px;
    width: 66.7%;
    position: absolute;
    bottom: 0;
    left: 33.3%;
    
`