import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    padding: 50px;

    .container_form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        background-color:#F2F1EF;
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
        padding: 20px;
        list-style: none;
        font-weight: bold;
        color: #FFFFFF;
        border-radius: 10px;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    li button {
        cursor: pointer;
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
        
    }
`