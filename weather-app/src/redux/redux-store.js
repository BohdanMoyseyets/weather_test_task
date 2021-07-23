import { combineReducers, createStore } from "redux";
import weatherReducer from "./weather-reducer";
import cityReducer from "./city-reducer";


let reducers = combineReducers({
  city: cityReducer,
  weather: weatherReducer
});

let store = createStore(reducers);

export default store;