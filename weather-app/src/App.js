import './App.css';
import * as axios from "axios";
import City from './components/City/City';
import Weather from './components/Weather/Weather';
import { render } from 'react-dom';


function App() {
  var a;
  axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=e403a5a5f562cc6e20d38fb329ee4738").then(response => {
    a = response.data.main.temp;
    debugger
});
debugger
  return (
    <div className="App">
      <City/>
      <Weather a={a}/>
    </div>
  );

  
}

export default App;
