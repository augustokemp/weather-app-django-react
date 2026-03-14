import requests


def get_forecast(lat, lon):
    url = "https://api.open-meteo.com/v1/forecast"

    params = {
        "latitude": lat,
        "longitude": lon,
        "hourly": "temperature_2m,rain,weather_code,visibility,is_day,uv_index",
        "timezone": "America/Sao_Paulo",
        "forecast_hours": 12,
    }

    response = requests.get(url, params=params)
    data = response.json()

    return _parse_forecast(data)


def _parse_forecast(data):
    hourly = data["hourly"]

    hours = [
        {
            "time": time,
            "temperature": temp,
            "rain": rain,
            "weather_code": code,
            "visibility": visibility / 1000,  # convert m to km
            "is_day": is_day,
            "uv_index": uv,
        }
        for time, temp, rain, code, visibility, is_day, uv in zip(
            hourly["time"],
            hourly["temperature_2m"],
            hourly["rain"],
            hourly["weather_code"],
            hourly["visibility"],
            hourly["is_day"],
            hourly["uv_index"],
        )
    ]

    return {
        "location": {
            "latitude": data["latitude"],
            "longitude": data["longitude"],
            "timezone": data["timezone_abbreviation"],
            "elevation": data["elevation"],
        },
        "current": hours[0],  # first hour = now
        "forecast": hours,  # all 12 hours
    }
