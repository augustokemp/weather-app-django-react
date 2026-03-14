import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import WeatherCard from "../components/weather/WeatherCard"

import useWeatherStore from "../store/weatherStore"

import bgSunrise from "../assets/bg/1-gemini-nano-banana-bg-sunrise.png"
import bgMidday from "../assets/bg/2-gemini-nano-banana-bg-midday.png"
import bgSunset from "../assets/bg/3-gemini-nano-banana-bg-sunset.png"
import bgNight from "../assets/bg/4-gemini-nano-banana-bg-night.png"

function getBackgroundImage(hour) {
  if (hour >= 6 && hour < 10) return bgSunrise
  if (hour >= 10 && hour < 17) return bgMidday
  if (hour >= 17 && hour < 20) return bgSunset
  return bgNight
}

function Main({ lat, lon }) {
  const isDay = useWeatherStore((state) => state.isDay)
  const currentHour = new Date().getHours()

  return (
    <div
      className={`relative h-screen overflow-auto flex flex-col bg-[image:var(--bg)] bg-[length:auto_100vh] md:bg-[length:100%_auto] bg-no-repeat bg-center md:bg-top ${isDay ? "text-gray-900" : "text-white"}`}
      style={{ "--bg": `url(${getBackgroundImage(currentHour)})` }}
    >
      <div className="absolute h-screen overflow-auto inset-0 bg-gradient-to-b from-white/50 to-white/30 pointer-events-none" />
      <Header className="relative z-10" />
      <main className="relative z-10 flex-1 flex items-start pt-8 md:pt-16">
        <WeatherCard lat={lat} lon={lon} />
      </main>
      <Footer className="relative z-10" />
    </div>
  )
}

export default Main