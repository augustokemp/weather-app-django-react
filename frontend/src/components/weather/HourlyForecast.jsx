import HourlyForecastCard from "./HourlyForecastCard"

function HourlyForecast({ forecast }) {
  return (
    <div className="flex gap-3 overflow-x-auto py-2 px-1 my-4">
      {forecast.map((forecastItem) => (
        <HourlyForecastCard key={forecastItem.time} forecastItem={forecastItem} />
      ))}
    </div>
  )
}

export default HourlyForecast