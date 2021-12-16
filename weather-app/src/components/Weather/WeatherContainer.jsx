import React from 'react';
import { connect } from 'react-redux';
import { setDataAC, setFetchingAC } from '../../redux/weather-reducer';
import Weather from './Weather';

let mapStateToProps = (state) =>{
    return {
        city: state.city.city,
        temp: state.weather.temp,
        desc: state.weather.desc,
        haveInfo: state.weather.haveInfo,
        isFetching: state.weather.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        dataSet: (temp, desc, haveInfo ) => { dispatch(setDataAC(temp, desc, haveInfo)) },
        setFetching: (isFetching ) => { dispatch(setFetchingAC(isFetching)) }
    }
}


const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default WeatherContainer;