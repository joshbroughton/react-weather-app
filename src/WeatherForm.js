export default function WeatherForm({ zipCode, setZipCode }) {
  return(
  <form>
    <input
      type="text"
      value={zipCode}
      onChange={(e) => setZipCode(e.target.value)}
      placeholder="enter a zip code" />
  </form>
  );
};
