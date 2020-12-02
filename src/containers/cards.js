import React from "react";
// import starshipsData from "../fixtures/starships.json";
import { Cards, OptForm } from "../components/";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";

const CardsContainer = (props) => {
  return (
    <>
      <OptForm>
        <OptForm.Input placeholder="Distance in MGLT" />
        <OptForm.Button load={props.loadStarships}>CALCULATE</OptForm.Button>
      </OptForm>

      <Cards>
        {props.data.map((item) => (
          <Cards.Item key={item.url}>
            <Cards.InfoContainer>
              <Cards.Icon />
            </Cards.InfoContainer>

            <Cards.InfoContainer>
              <Cards.SubTitle>Name</Cards.SubTitle>
              <Cards.Title>{item.name}</Cards.Title>
            </Cards.InfoContainer>

            <Cards.InfoContainer>
              <Cards.SubTitle>Model</Cards.SubTitle>
              <Cards.Title>{item.model}</Cards.Title>
            </Cards.InfoContainer>

            <Cards.InfoContainer>
              <Cards.SubTitle>Consumables</Cards.SubTitle>
              <Cards.Title>{item.consumables}</Cards.Title>
            </Cards.InfoContainer>

            <Cards.Row>
              <Cards.InfoContainer>
                <Cards.SubTitle>MGLT</Cards.SubTitle>
                <Cards.Title>{item.MGLT}</Cards.Title>
              </Cards.InfoContainer>
              <Cards.Result>50 stops</Cards.Result>
            </Cards.Row>
          </Cards.Item>
        ))}
      </Cards>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(CardsContainer);
