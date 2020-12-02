import styled from "styled-components/macro"; //macro gives me the right class name at the dev tools

import { FaEmpire } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  margin: 15px;
  padding: 15px;
  width: 350px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, max-content));
  grid-gap: 15px;
  padding: 70px 45px;
  max-width: 90%;
  margin: auto;
  justify-items: center;
`;

export const Icon = styled(FaEmpire)`
  font-size: 26px;
`;

export const InfoContainer = styled.div`
  justify-content: space-between;
  margin: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
`;

export const SubTitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
`;

export const Result = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
`;
