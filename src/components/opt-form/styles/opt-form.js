import styled from "styled-components/macro"; //macro gives me the right class name at the dev tools

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  font-size: 20px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #000;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #111;
  }

  @media (max-width: 1000px) {
      height: 50px;
      font-size: 16px;
      margin-top: 20px;
      font-weight: bold;
      max-width: 450px;
      width: 100%;
      justify-content: center;
      
    }
  }
`;
