import './App.css';
import * as axios from "axios";
import CityContainer from './components/City/CityContainer';
import WeatherContainer from './components/Weather/WeatherContainer';


function App(props) {
  // debugger
  return (
    <div className="App">
      <CityContainer store={props.store}/>
      <WeatherContainer store={props.store}/>
    </div>
  );

  
}

export default App;
