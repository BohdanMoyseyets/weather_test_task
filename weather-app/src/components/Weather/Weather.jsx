import React from 'react';
import * as axios from "axios";
import style_s from './Weather.module.css'

const Weather = (props) =>{
    // let a = axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=e403a5a5f562cc6e20d38fb329ee4738");
    let a;
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=e403a5a5f562cc6e20d38fb329ee4738").then(response => {
    a = response.data.main.temp;
});
    return(
    <div>
        Weather
        {a}
    </div>
    );
}
export default Weather;