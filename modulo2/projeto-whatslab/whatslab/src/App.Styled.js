import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

export const GlobalStyled = createGlobalStyle `
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`
export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    height: 100vh;
`