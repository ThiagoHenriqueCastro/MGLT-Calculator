import axios from "axios";
import api from "../../services/api";

export function loadStarships() {
  return (dispatch) => {
    return api.get("starships/").then((response) => {
      dispatch(addStarships(response.data));
    });
  };
}

export function addStarships(data) {
  return {
    type: "ADD_STARSHIPS",
    data: data,
  };
}
