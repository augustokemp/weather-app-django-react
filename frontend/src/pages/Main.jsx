import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import WeatherCard from "../components/weather/WeatherCard"

import useWeatherStore from "../store/weatherStore"

function Main({ lat, lon }) {
  const isDay = useWeatherStore((state) => state.isDay)

  return (
    <div className={`min-h-screen flex flex-col ${isDay ? "bg-sky-100 text-gray-900" : "bg-gray-900 text-white"}`}>
      <Header />
      <main className="flex-1">
        <WeatherCard lat={lat} lon={lon} />
      </main>
      <Footer />
    </div>
  )
}

export default Main