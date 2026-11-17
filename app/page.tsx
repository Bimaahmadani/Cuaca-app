'use client'

import { useState } from 'react';
import WeatherForm from './component/WeatherForm'

export default function Home() {
  const [city, setCity] = useState ("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () =>{
    const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.VISUALCR_API_KEY}`
    const response = await fetch (url)
    const data = await response.json();
    setWeather(data);
  }

  return(
    <div>
      <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather}/>
    </div>
  )
 
}
