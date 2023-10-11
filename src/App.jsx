import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter') { // Check if the Enter key was pressed
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error while getting weather data:', error);
      }
      setLocation('')
    }
  };

  const getWeatherClass = () => {
    const weatherCondition = data.weather?.[0]?.main;
    switch (weatherCondition) {
      case 'Rain':
        return 'rain';
      case 'Clear':
        return 'clear';
      case 'Snow':
        return 'snow';
      case 'Drizzle':
        return 'drizzle';
      case 'Thunderstorm':
        return 'thunderstorm';
      case 'Clouds':
        return 'clouds';
      case 'Haze':
        return 'haze';
  
      default:
        return 'default'; // Default class for unknown conditions
    }
  };

  useEffect(() => {
    // When the weather condition changes, apply the corresponding CSS class
    const weatherClass = getWeatherClass();
    document.body.className = weatherClass;
  }, [data.weather]);

  const icon = data.weather?.[0]?.icon
  const weatherIconUrl = icon
  ? `http://openweathermap.org/img/wn/${icon}@2x.png`
  : '';

  const mystyle = {
    color: "white",
    fontSize: "76px",
    margin: "0",
    paddingRight: "2rem"
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation} // it listens for the 'Enter' key"
          placeholder='Enter Location'
          type="text"
        />
      </div>
      <div className="top-container">
        <div className="name">
          <p style={{color:'white', paddingLeft:'1rem', fontSize:'25px'}}> {data ? data.name : null } </p>
        </div>
        <div className="values">
          <div className="temp">
            {data.main ? <p style={mystyle}>{data.main.temp.toFixed()}°C</p> : null}
          </div>
          <div>
            <img style={{paddingBottom:'.5rem'}} src={weatherIconUrl} width='50px'/>
            <p style={{margin:'0', color:'white', paddingLeft:'.5rem'}}> {data.weather?.[0]?.main} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
