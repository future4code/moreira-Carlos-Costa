import styled from 'styled-components'

export const Links = styled.div `
    .btn_addPlayList {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-decoration: none;
    }
    .btn_addPlayList button {
        width: 300px;
        height: 60px;
        background-color: #FFFFFF;
        border: 0;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        margin: 20px;
        
        
    }
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    color: grey;
    padding: 10px;
    overflow-x: scroll;

    .playlist {
        display: flex;
        flex-direction: row;
        list-style: none;
        align-items: center;
        justify-content: space-around;
        
    }
    ul {
        list-style: none;
        
    }
    li div {
        display: flex;
        margin: 20px;
        width: 150px;
        height:150px;
        background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
        color: #FFFFFF;
        font-weight: bold;
        font-size: 26px;
        border-radius: 20px;
        padding: 10px;

        flex-direction: column;
        align-content: space-around;
        justify-content: space-around;
        align-items: center;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        
    }
    .delete_icon {
        font-size:18px;
        
    }
    .add_icon {
        font-size:20px;
        color: #FFFFFF;
    }
    .icons {
        position: absolute;
        right: 10px;
        top: 10px; 
        cursor: pointer
    }
`