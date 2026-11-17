import {useState} from 'react';

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

export default function WeatherCard({ weatherData }) {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  }

  const renderTemperature = (temperature) => {
    if(isCelsius) {
      // convert in celsius
      return Math.round(temperature);
    } else {
      // convert in F
      return Math.round((temperature * 9) / 5 + 32);
    }
  }

  return (
    <>
      {weatherData && (
        <>
          <h2 className='city'>{weatherData.name}</h2>
          <p className="date">{new Date(weatherData.dt * 1000).toLocaleDateString("en-US", options)}</p>
          <div className="temperature">
            {renderTemperature(weatherData.main.temp)}
            <sup className='temp-unit' onClick={toggleTemperature}>
              {isCelsius ? "°C" : "°F"} | {isCelsius ? "°F" : "°C"}
            </sup>
          </div>
          <p className='description'>{weatherData.weather[0].description.toUpperCase()}</p>
          <div className='weather-details'>
            <div className='col'>
              <div>
                <p>{weatherData.wind.speed} m/s</p>
                <p>Wind speed</p>
              </div>
            </div>
            <div className='col'>
              <div>
                <p>{weatherData.main.humidity} %</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}