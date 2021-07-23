const SET_DATA = 'SET_DATA';

let initial_state = {
  temp: "",
  desc: "",
  haveInfo: false


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
    default:
      return state;
  }

}
export const setDataAC = (temp, desc, haveInfo) => ({ type: SET_DATA, Temp: temp, Desc: desc, HaveInfo: haveInfo });

export default weatherReducer;