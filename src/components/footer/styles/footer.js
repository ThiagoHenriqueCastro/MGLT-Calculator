import styled from "styled-components/macro"; //macro gives me the right class name at the dev tools
import { FaHeart } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #222;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 20px;

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const IconHeart = styled(FaHeart)`
  color: #e84646;
  font-size: 26px;
  padding: 0px 5px 0px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
