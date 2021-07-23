import React from 'react';
import * as axios from "axios";
import style_s from './Weather.module.css'

const Weather = (props) => {

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e403a5a5f562cc6e20d38fb329ee4738`).then(response => {
    props.dataSet(response.data.main.temp, response.data.weather[0].main, true)
  }).catch(function (error) {
    if (error.response) {
      props.dataSet("null", "null", false)
    }
  });

  return (
    <div className={style_s.info}>
      <div className={props.haveInfo ? undefined : style_s.hide_option }>
        <div className={style_s.title}>The Weather in {props.city}:</div>
        <div className={style_s.temp}>{props.temp}&#176;</div>
        <div className={style_s.desc}>{props.desc}</div>
      </div>
      <div className={!props.haveInfo ? undefined : style_s.hide_option }>
        No data for this City
      </div>
    </div>
  );
}
export default Weather;