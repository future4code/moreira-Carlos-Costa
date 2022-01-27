import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyled = createGlobalStyle `
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const Container = styled.div`
    background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
`
export const ContainerGrid = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50vh;

`