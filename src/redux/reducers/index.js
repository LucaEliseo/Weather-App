const initialState = {

  meteoData: {},
  place: "Rome",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE":
      return {
        ...state,
        place: action.payload,
      };

    case "ADD_LAT":
      return {
        ...state,
        lat: action.payload,
      };
    case "ADD_LON":
      return {
        ...state,
        lon: action.payload,
      };

    case "WEATHER":
      return {
        ...state,
        meteoData: action.payload,
      };

    case "METEO":
      return {
        ...state,
        manyDays: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
