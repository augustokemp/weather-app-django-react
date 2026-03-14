import requests


def get_location(lat, lon):
    url = "https://nominatim.openstreetmap.org/reverse"

    params = {
        "lat": lat,
        "lon": lon,
        "format": "json",
    }

    response = requests.get(
        url, params=params, headers={"User-Agent": "djangoweather/1.0"}
    )
    data = response.json()

    return _parse_location(data)


def _parse_location(data):
    licence, licence_url = data["licence"].rsplit(" ", 1)

    return {**data, "licence": licence, "licence_url": licence_url}
