import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#D7AF70" : "#BF8A36")};
  color: ${(props) => (props.whiteSchema ? "black" : "white")};
  height: 45px;
  width: 100%;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 2px solid var(--white);
  font-family: "PT Sans", sans-serif;
  margin-top: 16px;
  transition: 0.5s;

  :hover {
    border: 2px solid orange;
  }
`;
