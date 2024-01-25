import WeatherForm from "./WeatherForm";
import { useState } from "react";

export default function Weather() {
  const [zipCode, setZipCode] = useState("");
  return(
    <div>
      <h1>Weather</h1>
      <WeatherForm zipCode={zipCode} setZipCode={setZipCode} />
    </div>
  );
}
