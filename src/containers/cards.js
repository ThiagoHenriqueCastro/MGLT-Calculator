import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import starshipsData from "../fixtures/starships.json";
import { Cards, OptForm } from "../components/";
import { StarshipService, CalculateService } from "../services/";
import { addStarShips } from "../redux/Starships";

const CardsContainer = (props) => {
  const [input, setInput] = useState("");
  const [starships, setStarships] = useState([]);
  const dispatch = useDispatch();
  const listStarships = useSelector((state) => state.starshipReducer);

  const getStarships = useCallback(async () => {
    const data = await StarshipService.getAll();
    dispatch(addStarShips(data));
  }, [dispatch]);

  useEffect(() => {
    if (listStarships.length === 0) {
      getStarships();
    }
  }, [getStarships, listStarships.length]);

  const handleButton = () => {
    const data = [...listStarships];
    console.log(JSON.stringify(data));
    const calculatedData = listStarships.map((starship) => {
      const stops = CalculateService.calculateStopsByGivenDistance(
        1000000,
        starship.MGLT,
        starship.consumables
      );
      return { ...starship, stops };
    });
    setStarships(calculatedData);
  };

  const handleInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <>
      <OptForm>
        <OptForm.Input
          onChange={handleInput}
          value={input}
          placeholder="Distance in MGLT"
        />
        <OptForm.Button handleButton={handleButton}>CALCULATE</OptForm.Button>
      </OptForm>

      <Cards>
        {starships.map((item) => (
          <Cards.Item key={item.url}>
            <Cards.InfoContainer>
              <Cards.Icon
                isEmpire={
                  item.model.includes("Imperial") ||
                  item.model.includes("Executor") ||
                  item.name.includes("Death") ||
                  item.name.includes("Imperial") ||
                  item.name.includes("TIE")
                    ? true
                    : false
                }
              />
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
              <Cards.Result>{item.stops} stops</Cards.Result>
            </Cards.Row>
          </Cards.Item>
        ))}
      </Cards>
    </>
  );
};

export default CardsContainer;
