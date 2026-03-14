from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services import get_forecast


@api_view(["GET"])
def main_view(request):
    lat = request.GET.get("lat", -27.0253)
    lon = request.GET.get("lon", -48.6544)

    data = get_forecast(float(lat), float(lon))
    return Response(data)
