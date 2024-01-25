import WeatherForm from "./WeatherForm";
import { useState } from "react";

export default function Weather() {
  const [zipCode, setZipCode] = useState("");
  const [units, setUnits] = useState("fahrenheit");
  const [weather, setWeather] = useState("");

  async function updateWeather(zipCode) {
    let apiString = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.REACT_APP_API_KEY}`;
    try {
      const response = await fetch(apiString);
      const body = await response.json();
      setWeather(body.main.temp);
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div>
      <h1>Weather</h1>
      <WeatherForm
        zipCode={zipCode}
        setZipCode={setZipCode}
        units={units}
        setUnits={setUnits}
        updateWeather={updateWeather} />
      <h2>{weather}</h2>
    </div>
  );
}
