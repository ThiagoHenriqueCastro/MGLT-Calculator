let initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STARSHIPS":
      return {
        data: action.data,
      };

    default:
      return { ...state };
  }
};

export default reducer;
