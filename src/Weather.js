import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import DisplayWeather from "./DisplayWeather";


export default function Weather() {
  const [zipCode, setZipCode] = useState("");
  const [units, setUnits] = useState("fahrenheit");
  const [temperature, setTemperature] = useState("");
  const [displayTemperature, setDisplayTemperature] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (temperature === "") {
      setDisplayTemperature("");
    } else {
      if (units === "fahrenheit") {
        setDisplayTemperature(((parseInt(temperature) - 273.15)*(9 / 5) + 32).toFixed(2));
      } else if (units === "celsius") {
        setDisplayTemperature((parseInt(temperature) - 273.15).toFixed(2));
      } else {
        setDisplayTemperature((parseInt(temperature)).toFixed(2));
      }
    }
  }, [temperature, units])

  return(
    <div>
      <h1>Weather</h1>
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
