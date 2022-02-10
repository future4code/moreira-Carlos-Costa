import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    background-color: #EC5873;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    width: 80%;
    height: 90vh;
    border-radius: 20px;
    padding: 50px 0;

    .icons {
        font-size: 3rem;
        &:hover {
            color: #EC5873;
        }
    }
    .card_img img{
        max-height: 300px;
        object-fit: cover;
        object-position: 40% top;
        
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
        text-transform: uppercase;
        
        background: #DC2424;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
	    font-size: 1.4rem;
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
`
export const Match = styled.div`
    div {
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        align-items:center;
        background: radial-gradient(145.69% 2068.77% at 0% 50.33%, #A83195 0.54%, rgba(236, 88, 115, 0.74) 100%);
        border-radius: 20px;
        padding: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    p {
        color:#FFFFFF;
    }


    }
    
`