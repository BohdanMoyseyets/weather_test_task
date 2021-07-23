import React from 'react';
import { connect } from 'react-redux';
import { setDataAC } from '../../redux/weather-reducer';
import Weather from './Weather';

let mapStateToProps = (state) =>{
    return {
        city: state.city.city,
        temp: state.weather.temp,
        desc: state.weather.desc,
        haveInfo: state.weather.haveInfo
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        dataSet: (temp, desc, haveInfo ) => { dispatch(setDataAC(temp, desc, haveInfo)) }
    }
}


const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default WeatherContainer;