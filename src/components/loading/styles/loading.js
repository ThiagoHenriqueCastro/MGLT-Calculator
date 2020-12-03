import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
`;

export const TextInfo = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 26px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
