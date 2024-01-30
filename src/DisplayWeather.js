export default function DisplayWeather({ displayTemperature, isError }) {
  return(
    <h2>{isError ? "Error retrieving weather data" : displayTemperature}</h2>
  );
};
