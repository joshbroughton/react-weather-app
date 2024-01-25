export default function WeatherForm({ zipCode, setZipCode, units, setUnits, updateWeather }) {
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
