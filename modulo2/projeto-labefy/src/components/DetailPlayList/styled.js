import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    
    color: #FFFFFF;

    .container_music {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    ul{
        list-style: none;
    }
    li div{
        background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
        height: 6vh;
        margin: 20px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`