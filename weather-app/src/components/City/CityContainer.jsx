import React from 'react';
import { connect } from 'react-redux';
import { CityNameCreator } from '../../redux/city-reducer';
import { setDataAC, setFetchingAC } from '../../redux/weather-reducer';
import City from './City';

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
        cityInput: (text) => { dispatch(CityNameCreator(text)) },
        dataSet: (temp, desc, haveInfo ) => { dispatch(setDataAC(temp, desc, haveInfo)) },
        setFetching: (isFetching ) => { dispatch(setFetchingAC(isFetching)) }
    }
}


const CityContainer = connect(mapStateToProps, mapDispatchToProps)(City);
export default CityContainer;