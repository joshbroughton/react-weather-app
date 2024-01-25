export default function WeatherForm({ zipCode, setZipCode, units, setUnits }) {
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
        onClick={(e) => setUnits(e.target.value)}
        value="fahrenheit"/>
      Fahrenheit
    </label>
    <label>
      <input
        type="radio"
        checked={units === "celsius"}
        onClick={(e) => setUnits(e.target.value)}
        value="celsius"/>
      Celsius
    </label>
    <label>
      <input
        type="radio"
        checked={units === "kelvin"}
        onClick={(e) => setUnits(e.target.value)}
        value="kelvin"/>
      Kelvin
    </label>
  </form>
  );
};
