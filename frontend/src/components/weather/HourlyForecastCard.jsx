function HourlyForecastCard({ forecastItem }) {
  const hour = new Date(forecastItem.time).getHours().toString().padStart(2, "0") + "h"

  return (
    <div className="flex flex-col items-center gap-1 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-[64px]">
      <span className="text-sm font-medium opacity-70">{hour}</span>
      <span className="text-lg font-bold">{forecastItem.temperature}°</span>
      {forecastItem.rain > 0 && (
        <span className="text-xs opacity-60">{forecastItem.rain}mm</span>
      )}
    </div>
  )
}

export default HourlyForecastCard