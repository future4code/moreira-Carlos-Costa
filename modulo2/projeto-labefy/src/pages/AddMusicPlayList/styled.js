import styled from 'styled-components'

export const Container = styled.div `
    
    background-color: #000;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    height: 100vh;

.button_back {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    top: 100px;
    left: 70px;
    width: 170px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
}
.logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        border-radius: 10px;
        padding: 6px;
        color:#FFFFFF;
    }
.form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;
  }
  
  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
  
  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }
  
  .ic1 {
    margin-top: 40px;
  }
  
  .ic2 {
    margin-top: 30px;
  }
  
  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  
  .cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 110px;
  }
  
  .cut-short {
    width: 90px;
  }
  
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }
  
  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }
  
  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }
  
  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }
  
  .input:focus ~ .placeholder {
    color: #dc2f55;
  }
  
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    // outline: 0;
    text-align: center;
    width: 100%;
  }
  
  .submit:active {
    background-color: #06b;
  }
  `