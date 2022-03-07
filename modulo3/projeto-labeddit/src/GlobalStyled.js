import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.min.css'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export const GlobalStyled = createGlobalStyle `
  * {
        font-family: 'Poppins', sans-serif;
    }  
    body { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #EEEEEE;
        background-size: auto;
    }
`