import styled from "styled-components/macro"; //macro gives me the right class name at the dev tools

import { FaEmpire, FaRebel } from "react-icons/fa";

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
  align-self: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  grid-template-rows: repeat(auto-fill, minmax(350px, max-content));
  grid-gap: 15px;
  padding: 70px 45px;
  max-width: 90%;
  margin: auto;
  justify-items: center;
  justify-content: center;
  width: 100vw;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const IconEmpire = styled(FaEmpire)`
  font-size: 26px;
`;

export const IconRebel = styled(FaRebel)`
  font-size: 26px;
`;

export const InfoContainer = styled.div`
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
  font-size: 26px;
  @media (max-width: 10000px) {
    text-align: right;
  }
`;
