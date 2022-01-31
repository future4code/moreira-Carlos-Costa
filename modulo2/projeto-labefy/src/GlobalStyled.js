import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyled = createGlobalStyle `
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`
export const Container = styled.div`
    background-color:#11162a;
    height: 100vh;
`
export const ContainerGrid = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;

`