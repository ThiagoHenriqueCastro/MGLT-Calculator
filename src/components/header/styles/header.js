import styled from "styled-components/macro"; //macro gives me the right class name at the dev tools

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div``;

export const Break = styled.div`
  width: 90%;
  border-bottom: 1px solid #aaa;
  align-self: center;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 26px;
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
