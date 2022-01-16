import styled from 'styled-components'

export const ContainerMain = styled.div`
    display: flex;
    height:95vh;
    max-width:100%;
    flex-direction: column;
    justify-content: space-between;
    
`
export const ContainerHeader = styled.div`
    display: flex;
    background-color:#EFEFEF;
    padding: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    
`
export const ContainerHeaderImg = styled.img`
    border-radius: 50%;
    
    
`
export const ContainerHeaderIcon = styled.div`

    
`
export const ContainermainMensagem = styled.p`
    display: grid;
    padding: 20px;
    width: 66.7%;
    position: absolute;
    bottom: 80px;
    left: 33.3%;
    
`
export const ContainerHeaderIPut = styled.div`
    display: flex;
    background-color: #DFDFDF;
    padding: 20px;
    width: 66.7%;
    position: absolute;
    bottom: 0;
    left: 33.3%;
    
`
export const Span = styled.div`
    position: relative;
    padding: 6px;
    margin-bottom: 12px;
    border-radius: 0.5em;
    width: 30%;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    word-wrap: break-word;

    background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else if (props.tipo === "outro") {
            return "#ffffff" // Branco
        }
    }};

    align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};

    margin-right: ${props => {
        if (props.tipo === "eu") {
            return "1.5em"
        }
    }};

    margin-left: ${props => {
        if (props.tipo !== "eu") {
            return "1.5em"
        }
    }};

    &:after {
    	content: '';
    	border: 15px solid transparent;

        border-top-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else if (props.tipo === "outro") {
            return "#ffffff"
        }
    }}; 
    /* isso posiciona o triângulo */
    position: absolute;
    top: 0px;
    right: ${props => {
        if (props.tipo === "eu") {
            return "-8px";
    }}};
    left: ${props=> {
        if (props.tipo === "outro") {
            return "-8px";
        }
    }}};
    	
    }
`
export const Mensseger = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;

`
export const ContainerFooterInPut = styled.div`
    display: flex;
    background-color: #DFDFDF;
    padding: 20px;
    
`
export const ContainerNome = styled.strong`
    color: #9AAC8C;
    font-size: 0.2em;
    font-weight: 600;
    margin-bottom: 0.2em;

`