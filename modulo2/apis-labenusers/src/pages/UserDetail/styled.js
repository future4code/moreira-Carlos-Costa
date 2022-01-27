import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    padding: 50px;

    .container_form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        background: linear-gradient(to bottom, #6C7A89, #076585); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        width:70%;
        height: 80vh;
        margin: 0 auto;
        padding: 50px;

        border-radius: 10px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    }
    li {
        display: flex;
        background-color:#6C7A89;
        margin: 20px;
        padding: 90px;
        list-style: none;
        font-weight: bold;
        color: #FFFFFF;
        border-radius: 10px;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
    li button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
        color: #FFFFFF;
        font-size: 20px;

        &:hover {
            color: #8F1D21;
        }
    }
    .button_link  {
        display: flex;
    }
    .button_link button {
      
        width: 100%;
        padding: 18px;
        margin: 10px auto;
        border-radius: 6px;
        border: 0;
        font-weight: bold;
        background-color:#6C7A89;
        cursor: pointer;
        color: #FFFFFF;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
    span {
        cursor: pointer;
    }
    .form_input {
        display: flex;
        align-items: center;
    }
    .form_input input {
        padding: 10px;
        margin: 5px;
        border-radius: 4px;
        border: 0;
    }
`