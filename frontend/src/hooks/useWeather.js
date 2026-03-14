import { useQuery } from "@tanstack/react-query"
  import axios from "axios"

  const fetchWeather = async (lat, lon) => {
    const { data } = await axios.get("http://localhost:8000/", {
      params: { lat, lon }
    })
    return data
  }

  export function useWeather(lat, lon) {
    return useQuery({
      queryKey: ["weather", lat, lon],
      queryFn: () => fetchWeather(lat, lon),
      enabled: !!lat && !!lon,  // only fetch when we have coordinates
    })
  }