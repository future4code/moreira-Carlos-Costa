import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction:column;
    height: 100vh;
`
export const Background = styled.div`
    height: 100%;
`
export const ContainerMain = styled.div`

    display: flex;
    flex-direction:column;
    margin: 50px auto;
    width: 80%;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);
    
`
export const BackButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
  border: none;
  background-color: #C4C4C4;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(212, 12, 126);
  }
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #FFFFFF;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
`;
export const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px auto;
  
`;
export const TripContent = styled.div`
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(68, 68, 68, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 90%;
    height: 100%;
  
`;
export const ContainerSection = styled.div`
    margin: 10px auto;
    padding: 10px;
    display: grid;
    gap: 80px;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;

`
export const ContainerSectionLeft = styled.div`
    background: rgba(68, 68, 68, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .mySwiper{
    display: flex;
    justify-content:center;
    align-items:center;

    width:30vw;
    height:100%;
   
  }
  .mySwiperSlide{
    
    
  }
  h4 {
    color: #FFFFFF;
    display: flex;
    justify-content:center;
    align-items:center;
    
  }

`
export const ContainerSectionRight = styled.div`
  background: rgba(68, 68, 68, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .mySwiper{
    display: flex;
    justify-content:center;
    align-items:center;
    width:30vw;
    height:80%;
    background-color:snow;
    background: transparent;
  }
  .mySwiperSlide{
    display: flex;
    justify-content:center;
    align-items:center;
    
  }

  h4 {
    width: 100%;
    color:#FFFFFF;
  }

`
export const TripTitle = styled.h2`
  color: #FFFFFF;
  font-size: 2rem;
  text-transform: uppercase;
`;
export const TripInfo = styled.h4`
  color: #828282;
  text-transform: uppercase;
  font-size: 1.4rem;
`;
export const Span = styled.span`
  color: #FFFFFF;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 1.2rem;

`;
export const Approved = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(196, 196, 196, 0.24);
  border-radius: 12px;
  padding: 12px;
  width: 70%;
  color: #FFFFFF;

  span {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #2F9D54;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 20px;
  }
  p {
    font-size: 1.2rem;
    display: flex;
    height: 1vh;

  }

`
export const CandidateInfo = styled.h4`
  color: #828282;
  margin: 5px;
`;
