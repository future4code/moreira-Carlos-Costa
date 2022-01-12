import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

export const GlobalStyled = createGlobalStyle `
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const Container = styled.div `
  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    
`
export const SectionContainer = styled.div `

  width: 40vw;
  margin: 10px 0;

`
export const SectionContainerH2 = styled.h2 `

  text-align: center;
  margin-bottom: 20px;

`