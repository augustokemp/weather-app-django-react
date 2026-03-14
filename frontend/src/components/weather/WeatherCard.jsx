import { useEffect } from "react"
import { useWeather } from "../../hooks/useWeather"
import LoadingSpinner from "../common/LoadingSpinner"
import ErrorMessage from "../common/ErrorMessage"

import useWeatherStore from "../../store/weatherStore"
import HourlyForecast from "./HourlyForecast"

function WeatherCard({ lat, lon }) {
  const { data, isLoading, isError } = useWeather(lat, lon)
  const setIsDay = useWeatherStore((state) => state.setIsDay)
  const setLicence = useWeatherStore((state) => state.setLicence)

  useEffect(() => {
    if (data) {
      setIsDay(data.weather.current.is_day)
      setLicence(data.location.licence, data.location.licence_url)
    }
  }, [data, setIsDay, setLicence])

  if (isLoading || !data) return (
    <div className="flex-1 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  )
  if (isError) return (
    <div className="flex-1 flex items-center justify-center">
      <ErrorMessage />
    </div>
  )

  const { weather, location } = data

  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-2xl">{location.address?.city || location.address?.town} - {location.address?.state}</h1>
      <div className="flex justify-center items-center">

        <h1 className="text-4xl font-bold">{weather.current.temperature}°C</h1>


      </div>
      <HourlyForecast forecast={weather.forecast} />
      <div className="ml-2 mt-2 bg-white/20 backdrop-blur-lg rounded-xl px-3 py-2 text-center whitespace-nowrap">
        <div>
          <p className="text-sm opacity-70">Elevation: {weather.location.elevation}m</p>
          <p className="text-sm opacity-70">{weather.location.latitude}, {weather.location.longitude}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard