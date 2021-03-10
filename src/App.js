import './App.css';
import axios from './axios';
// import requests from './request';

function App() {
  async function fetchData() {
    //it take some time in fetching from tmdb
    //axios gives instance and remaining from prop fetchUrl passed from Row
    const request = await axios.get(
      'forecast?q=Islamabad&appid=cd205c660f956316eccbe8e38a5e5993'
    );
    const result = request.data;
    console.log(result.city.coord.lat);
    console.log(result.city.coord.lon);
    console.log(result.city.country);
    console.log(result.city.name);
    console.log(result.list[0]);
    console.log(result.list[0].clouds.all);
    console.log(result.list[0].dt_txt);
    console.log(result.list[0].main.temp);
    console.log(result.list[0].main.temp_min);
    console.log(result.list[0].main.temp_max);
    console.log(result.list[0].main.pressure);
    console.log(result.list[0].main.sea_level);
    console.log(result.list[0].main.grnd_level);
    console.log(result.list[0].main.humidity);
    console.log(result.list[0].weather[0].main);
    console.log(result.list[0].weather[0].description);
    console.log(result.list[0].weather[0].icon);
    console.log(result.list[0].wind.speed);
    console.log(result.list[0].wind.deg);
    console.log(result.list[0].rain['3h']);
    console.log(new Date(result.city.sunrise * 1000));
    console.log(new Date(result.city.sunset * 1000));
    // console.log(result);
    // return result;
  }
  fetchData();
  return (
    <div className="App">
      <img src="http://openweathermap.org/img/w/10n.png" alt="" />
    </div>
  );
}

export default App;
