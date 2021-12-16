const SET_DATA = 'SET_DATA';
const SET_FETCHING = 'SET_FETCHING';
const FIND_CITY = 'FIND_CITY';

let initial_state = {
  city: "Lviv",
  temp: "",
  desc: "",
  haveInfo: false,
  isFetching:false


}

const weatherReducer = (state = initial_state, action) => {
  console.log(action)
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        temp: parseInt(+action.Temp - 273) ,
        desc: action.Desc,
        haveInfo: action.HaveInfo
      }
    }
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
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
export const setDataAC = (temp, desc, haveInfo) => ({ type: SET_DATA, Temp: temp, Desc: desc, HaveInfo: haveInfo });
export const setFetchingAC = (isFetching) => ({ type: SET_FETCHING, isFetching });
export const CityNameCreator = (text) => ({ type: FIND_CITY, city_input: text });

export default weatherReducer;