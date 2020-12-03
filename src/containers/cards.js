import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import starshipsData from "../fixtures/starships.json";
import { Cards, OptForm, Loading } from "../components/";
import { StarshipService, CalculateService } from "../services/";
import { addStarShips } from "../redux/Starships";

const CardsContainer = (props) => {
  const [input, setInput] = useState("");
  const [loading, toggleLoading] = useState(true);
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
    //toggleLoading(false);
  }, [getStarships, listStarships.length]);

  const handleButton = () => {
    if (input === "") {
      toggleLoading(true);
      return;
    } else {
      const data = [...listStarships];
      console.log(JSON.stringify(data));
      const calculatedData = listStarships.map((starship) => {
        const stops = CalculateService.calculateStopsByGivenDistance(
          input,
          starship.MGLT,
          starship.consumables
        );
        return { ...starship, stops };
      });
      setStarships(calculatedData);
      setInput("");
      toggleLoading(false);
    }
  };

  return (
    <>
      <OptForm>
        <OptForm.Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Distance in MGLT"
        />
        <OptForm.Button handleButton={handleButton}>CALCULATE</OptForm.Button>
      </OptForm>

      {loading ? (
        <Loading>
          <Loading.Lottie />
          <Loading.TextInfo>No results :c</Loading.TextInfo>
          <Loading.TextInfo>
            Provide a distance and may the force be with you!
          </Loading.TextInfo>
        </Loading>
      ) : (
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
                <Cards.Result>
                  {item.MGLT === "unknown" || item.MGLT === "unknown"
                    ? "Unknown"
                    : item.stops}{" "}
                  stops
                </Cards.Result>
              </Cards.Row>
            </Cards.Item>
          ))}
        </Cards>
      )}
    </>
  );
};

export default CardsContainer;
