import React from 'react';
import style_s from './City.module.css';
import * as axios from "axios";

const City = (props) =>{
  // let searchCity = React.createRef();
  // debugger
  let onChangeCity = (e) => {
    let text = e.target.value;
    props.cityInput(text);
    console.log(text);
    props.setFetching(true);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=e403a5a5f562cc6e20d38fb329ee4738`).then(response => {
    props.setFetching(false);
    props.dataSet(response.data.main.temp, response.data.weather[0].main, true)
}).catch(function (error) {
  if (error.response) {
    props.setFetching(false);
    props.dataSet("null", "null", false)
  }
});
    
}
    return(
    <div className={style_s.city}>
        <span className={style_s.title}>Enter the City Name</span>
        <input className={style_s.input} onChange={onChangeCity} value={props.city} placeholder={"Input City"} />
    </div>
    );
}
export default City;