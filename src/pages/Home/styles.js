import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.65);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 900;
  }

  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }

  span {
    color: #f5f5f5;
    margin-bottom: 2rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    font-size: 1.3rem;
    flex-wrap: wrap;
  }
`;
