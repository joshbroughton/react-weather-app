export default function WeatherForm({ zipCode, setZipCode, units, setUnits, setTemperature, setIsError }) {
  async function updateWeather(zipCode) {
    let apiString = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.REACT_APP_API_KEY}`;
    try {
      const response = await fetch(apiString);
      const body = await response.json();
      if (body.cod === 200) {
        setIsError(false);
        setTemperature(body.main.temp);
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return(
  <form>
    <input
      type="text"
      value={zipCode}
      onChange={(e) => setZipCode(e.target.value)}
      placeholder="enter a zip code" />
    <label>
      <input
        type="radio"
        checked={units === "fahrenheit"}
        onChange={(e) => setUnits(e.target.value)}
        value="fahrenheit"/>
      Fahrenheit
    </label>
    <label>
      <input
        type="radio"
        checked={units === "celsius"}
        onChange={(e) => setUnits(e.target.value)}
        value="celsius"/>
      Celsius
    </label>
    <label>
      <input
        type="radio"
        checked={units === "kelvin"}
        onChange={(e) => setUnits(e.target.value)}
        value="kelvin"/>
      Kelvin
    </label>
    <button onClick={(e) => {
      e.preventDefault();
      updateWeather(zipCode)
      }}>Submit</button>
  </form>
  );
};
