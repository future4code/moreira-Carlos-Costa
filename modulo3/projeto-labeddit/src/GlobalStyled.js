import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.min.css'
export const GlobalStyled = createGlobalStyle `
  * {
        font-family: 'Poppins', sans-serif;
    }  
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #5f2c82;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #49a09d, #5f2c82); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




    }
`