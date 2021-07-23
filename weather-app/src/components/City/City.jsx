import React from 'react';
import style_s from './City.module.css'

const City = (props) =>{
  // let searchCity = React.createRef();
  // debugger
  let onChangeCity = (e) => {
    let text = e.target.value;
    props.cityInput(text);
}
    return(
    <div className={style_s.city}>
        <span className={style_s.title}>Enter the City Name</span>
        <input className={style_s.input} onChange={onChangeCity} value={props.city} placeholder={"Input City"} />
    </div>
    );
}
export default City;