import React from 'react';
import * as axios from "axios";
import style_s from './Weather.module.css';
import preloader from './../../assets/loader.gif'

// const Weather = (props) => {
//   // props.setFetching(true);
//   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e403a5a5f562cc6e20d38fb329ee4738`).then(response => {
//     // props.setFetching(false);
//     props.dataSet(response.data.main.temp, response.data.weather[0].main, true);
    
//   }).catch(function (error) {
//     if (error.response) {
//       // props.setFetching(false);
//       props.dataSet("null", "null", false);
//       // console.log("error");
      
//     }
//   });

//   return (
//     <div className={style_s.info}>
//       {
//         props.isFetching ? <div ><img src={preloader} /></div> :
//           <div className={props.haveInfo ? undefined : style_s.hide_option}>
//             <div className={style_s.title}>The Weather in {props.city}:</div>
//             <div className={style_s.temp}>{props.temp}&#176;</div>
//             <div className={style_s.desc}>{props.desc}</div>
//           </div>
//       }

//       <div className={!props.haveInfo ? undefined : style_s.hide_option}>
//         No data for this City
//       </div>
//     </div>
//   );
// }
class Weather extends React.Component {
  render() {
    console.log("render");
      return <>
          <div className={style_s.info}>
      {
        this.props.isFetching ? <div ><img src={preloader} /></div> :
          <div className={this.props.haveInfo ? undefined : style_s.hide_option}>
            <div className={style_s.title}>The Weather in {this.props.city}:</div>
            <div className={style_s.temp}>{this.props.temp}&#176;</div>
            <div className={style_s.desc}>{this.props.desc}</div>
          </div>
      }

      <div className={!this.props.haveInfo ? undefined : style_s.hide_option}>
        No data for this City {this.props.city}
      </div>
    </div>

      </>
  }
}

export default Weather;