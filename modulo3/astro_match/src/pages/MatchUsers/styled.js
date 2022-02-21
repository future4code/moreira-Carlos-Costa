import styled from 'styled-components'

export const Container = styled.div`
    background-color: #EC5873;
    display: flex;
    flex-direction: column;
    justify-content:  space-evenly;
    align-items: center;
    margin: 50px auto;
    width: 80%;
    height: 90vh;
    border-radius: 20px;
    padding: 10px;

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 2rem;
    }
    .main {
        display: flex;
        width: 80%;
        height: 60vh;
        margin: 0 auto;

        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .footer button{
        width: 100%;
        border: 0;
        border-radius: 8px;
        background-color: #3D3D3D;
        color: #FFFFFF;
        font-size: 1.4rem;
        padding: 10px 30px;
        cursor: pointer;
    }
    .match_card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 70%;
        height: 24%;
        background: radial-gradient(145.69% 2068.77% at 0% 50.33%, #A83195 0.54%, rgba(236, 88, 115, 0.74) 100%);
        border-radius: 57px;
        padding: 8px;
    }

    img {
        width: 120px;
        max-height: 120px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50%;
        transform: matrix(1, 0, 0, 1, 0, 0);
        object-fit: cover;
        object-position: 40% top;
    }

    .name {
        font-size: 2.4rem;
        padding-left: 2rem;
        color: #FFFFFF;
        font-weight: bold;
    }

    .age {
        font-size: 2.4rem;
        padding-left: 2rem;
        color: #FFFFFF;
    }

    /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
    */

    @media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        width: auto;
        height: 100vh;
        margin: 0;
        border-radius:0;
        text-align: center;

        img {
        width: 80px;
        height: 80px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50%;
        transform: matrix(1, 0, 0, 1, 0, 0);
        object-fit: cover;
        object-position: 40% top;
        }
        .match_card {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 20%;
            border-radius: 12px;
        }
        .name {
            font-size: 0.8rem;
            padding-left: 0.5rem;
            color: #FFFFFF;
            font-weight: bold;
        }

        .age {
            font-size: 1rem;
            padding-left: 1rem;
            color: #FFFFFF;
        }
    }

    /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
    */

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        display: flex;
        width: 100%;
        height: 100vh;
        margin: 0;
        border-radius:0;
        text-align: center;

        img {
        width: 80px;
        height: 80px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50%;
        transform: matrix(1, 0, 0, 1, 0, 0);
        object-fit: cover;
        object-position: 40% top;
        }
        .match_card {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 40%;
            border-radius: 12px;
        }
        .name {
            font-size: 0.8rem;
            padding-left: 0.5rem;
            color: #FFFFFF;
            font-weight: bold;
        }

        .age {
            font-size: 1rem;
            padding-left: 1rem;
            color: #FFFFFF;
        }
    }

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
    display: flex;
        width: auto;
        height: 100vh;
        margin: 0;
        border-radius:0;
        text-align: center;

        img {
        width: 60px;
        height: 60px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50%;
        transform: matrix(1, 0, 0, 1, 0, 0);
        object-fit: cover;
        object-position: 40% top;
        }
        .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 1rem;
        }
        .main {
            display: flex;
            width: 80%;
            height: 60vh;
            margin: 0 auto;

            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        .footer button{
            width: 100%;
            border: 0;
            border-radius: 8px;
            background-color: #3D3D3D;
            color: #FFFFFF;
            font-size: 1rem;
            padding: 10px 30px;
            cursor: pointer;
        }
        .match_card {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 28%;
            border-radius: 12px;
        }
        .name {
            font-size: 0.8rem;
            padding-left: 0.5rem;
            color: #FFFFFF;
            font-weight: bold;
        }

        .age {
            font-size: 1rem;
            padding-left: 1rem;
            color: #FFFFFF;
        }
}

/* 
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        width: auto;
        height: 100vh;
        margin: 0;
        border-radius:0;
        text-align: center;

        img {
        width: 60px;
        height: 60px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50%;
        transform: matrix(1, 0, 0, 1, 0, 0);
        object-fit: cover;
        object-position: 40% top;
        }
        .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 1rem;
        }
        .main {
            display: flex;
            width: 80%;
            height: 60vh;
            margin: 0 auto;

            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        .footer button{
            width: 100%;
            border: 0;
            border-radius: 8px;
            background-color: #3D3D3D;
            color: #FFFFFF;
            font-size: 1rem;
            padding: 10px 30px;
            cursor: pointer;
        }
        .match_card {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 20%;
            border-radius: 12px;
        }
        .name {
            font-size: 0.8rem;
            padding-left: 0.5rem;
            color: #FFFFFF;
            font-weight: bold;
        }

        .age {
            font-size: 1rem;
            padding-left: 1rem;
            color: #FFFFFF;
        }
}

`
