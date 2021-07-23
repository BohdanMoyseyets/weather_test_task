import React from 'react';
import { connect } from 'react-redux';
import { CityNameCreator } from '../../redux/city-reducer';
import City from './City';

let mapStateToProps = (state) =>{
    return {
        city: state.city.city
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        cityInput: (text) => { dispatch(CityNameCreator(text)) }
    }
}


const CityContainer = connect(mapStateToProps, mapDispatchToProps)(City);
export default CityContainer;