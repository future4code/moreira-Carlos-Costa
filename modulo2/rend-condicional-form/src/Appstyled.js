import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body { 
        margin: 0;
    }
`
export const ContainerApp = styled.div`
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 20px;
    height:100vh;
    h1 {
        font-size: 2rem;
    }
    li p {
        color: #4b6cb7;
        font-weight: bold;
    }
    li input, select {
        height: 40px;
        width: 50%;
        border-radius: 8px;
        padding: 4px;
        
    }
    li button {
        height: 40px;
        border: 0;
        padding: 8px;
        border-radius: 8px;
        color: #FFFFFF;
        font-weight: bold;
    }

    font-family: 'Ubuntu', sans-serif;
   
`