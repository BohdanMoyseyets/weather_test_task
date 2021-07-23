const FIND_CITY = 'FIND_CITY';

let initial_state = {
  city: ""

}

const cityReducer = (state = initial_state, action) => {
  switch (action.type) {
    case FIND_CITY: {
      return {
        ...state,
        city: action.city_input
      };
    }
    default:
      return state;
  }

}
export const CityNameCreator = (text) => ({ type: FIND_CITY, city_input: text });

export default cityReducer;