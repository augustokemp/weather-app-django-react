from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services import get_forecast
from location.services import get_location


@api_view(["GET"])
def main_view(request):
    lat = request.GET.get("lat", -27.0253)
    lon = request.GET.get("lon", -48.6544)

    location = get_location(lat, lon)
    weather = get_forecast(float(lat), float(lon))

    data = {"weather": weather, "location": location}

    return Response(data)
