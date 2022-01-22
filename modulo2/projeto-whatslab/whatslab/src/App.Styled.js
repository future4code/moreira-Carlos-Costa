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
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: start;
    margin: -80px auto;
    background-color:#DED6CE;
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media(max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr ;
      width: 90%;
      height:90vh;
    }
		;
`