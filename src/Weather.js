import { useState, useEffect } from "react";
import './Weather.css';
import WeatherForm from "./WeatherForm";
import DisplayWeather from "./DisplayWeather";


export default function Weather() {
  const [zipCode, setZipCode] = useState("");
  const [units, setUnits] = useState("fahrenheit");
  const [temperature, setTemperature] = useState("");
  const [displayTemperature, setDisplayTemperature] = useState("Enter a zip code to get weather info");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (temperature === "") {
      setDisplayTemperature("Enter a zip code to get weather info");
    } else {
      if (units === "fahrenheit") {
        setDisplayTemperature(((parseInt(temperature) - 273.15)*(9 / 5) + 32).toFixed(2) + " °F");
      } else if (units === "celsius") {
        setDisplayTemperature((parseInt(temperature) - 273.15).toFixed(2) + " °C");
      } else {
        setDisplayTemperature((parseInt(temperature)).toFixed(2) + "K");
      }
    }
  }, [temperature, units])

  return(
    <div className="card">
      <h1>Current Temperature</h1>
      <WeatherForm
        zipCode={zipCode}
        setZipCode={setZipCode}
        units={units}
        setUnits={setUnits}
        setTemperature={setTemperature}
        setIsError={setIsError} />
      <DisplayWeather displayTemperature={displayTemperature} isError={isError} />
    </div>
  );
}
