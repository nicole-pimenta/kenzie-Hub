import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--white);
  margin-bottom: 8px;
  div {
    span {
      font-size: 0.9rem;
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--grey);
  border-radius: 10px;
  border: 2px solid var(--light-yellow);
  color: var(--white);
  padding: 0.3rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color:var(--white) &::placeholder {
      color: var(--white);
    }
  }

  svg {
    margin-right: 14px;
  }
`;
