import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: #FFFFFF;

    .container_music {
        margin-top: 150px;
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    ul{
        list-style: none;
    }
    li div{
        display: flex;
        background: #FFFFFF;
        height: 8vh;
        margin: 20px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 20px;
    }
    
    .initial_details {
        display: flex;
        flex-direction: column;
    }
    .name_details {
        font-size: 1.4rem;
        font-weight: bold;
        color:#3c3e4d;
    }
    .artist_details {
        font-weight: 400;
        color:#3F5EFB;
    }
   
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
	/* aqui colocamos o CSS para celulares */

}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
	/* aqui colocamos o CSS para tablets */
}

@media screen and (min-device-width : 1200px) {
	/* aqui colocamos o CSS para computadores */
}

`