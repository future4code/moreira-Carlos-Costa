import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    background-color: #EC5873;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    width: 80%;
    height: 95vh;
    border-radius: 20px;
    padding: 30px 0;

    .icons {
        font-size: 3rem;
        &:hover {
            color: #EC5873;
        }
    }
    .card_img img{
        max-height: 350px;
        object-fit: cover;
        object-position: 60% top;
        
    }
    .icons_users {
        font-size: 40px; 
        cursor: pointer;
        color: #FFFFFF;
    }
    .icon_matches {
        font-size: 4rem;
        color: #FFFFFF;
        cursor: pointer;
    }
    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content:  space-between;
        align-items: center;
        padding: 0 20px;
    }
    .header p {
        border: 1px solid #FFFFFF;
        padding: 0 20px;
        border-radius: 10px;
        text-transform: uppercase;
        
        background: #DC2424;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 1.4rem;
    }
/*
##Device = Tablets, Ipads (portrait)
##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin:0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 50px;

    .icons_users {
        font-size: 24px; 
        cursor: pointer;
        color: #FFFFFF;
    }
    .header p {
	font-size: 1.2rem;
    }
}
/* 
##Device = Tablets, Ipads (landscape)
##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: flex;
    width: auto;
    height: 100%;
    margin: 0;
    border-radius:0;
    text-align: center;

    .icons_users {
        font-size: 24px; 
        cursor: pointer;
        color: #FFFFFF;
    }
    .header p {
	font-size: 1.2rem;
    }
}
/* 
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
*/
@media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    width: auto;
    height: 100%;
    margin: 0;
    border-radius:0;
    text-align: center;

    .icons_users {
        font-size: 24px; 
        cursor: pointer;
        color: #FFFFFF;
    }
    .header p {
	font-size: 1.2rem;
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

    .icons_users {
        font-size: 24px; 
        cursor: pointer;
        color: #FFFFFF;
    }
    .header p {
	font-size: 1.2rem;
    }
}
`
export const Details = styled.div`
    max-width: 450px;
    .description {
        display: flex;
        font-size: 1.8rem;
    }
    .description p {
        font-weight: bold;
    }
    .description span {
        padding-left: 0.5rem
    }
    .bio {
        font-size: 1.2rem;
    }
@media (min-width: 320px) and (max-width: 480px) {
    .description {
        display: flex;
        font-size: 1.4rem;
    }
    .description p {
        font-weight: bold;
    }
    .description span {
        padding-left: 0.5rem
    }
    .bio {
        font-size: 1rem;
    }
}
`
export const Match = styled.div`
    div {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        align-items:center;
        background: radial-gradient(145.69% 2068.77% at 0% 50.33%, #A83195 0.54%, rgba(236, 88, 115, 0.74) 100%);
        border-radius: 20px;
        padding:0 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    p {
        color:#FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        div {
            font-size: 1rem;
        }
    }
    
`