import styled, { keyframes } from "styled-components";
import loginImage from "../../assets/code5.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${loginImage}) no-repeat center, var(--light-yellow);
    background-size: contain;
    box-shadow: 5px 10px 8px #888888;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
from{
  opacity:0 ;
  transform:translateX(-50px)
} 

to{
  opacity: 1;
  transform: translateX(0px);
}

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    max-width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 32px;
    text-shadow: 0px 4px 4px rgba(1, 0, 0, 0.95);
    font-size: 2rem;
  }

  > div {
    margin-top: 16px;
  }

  p {
    margin-top: 10px;
    color: white;
  }

  a {
    font-weight: bold;
    color: #bf8a36;
  }
`;
