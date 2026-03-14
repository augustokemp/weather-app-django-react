import { useEffect, useState } from "react"
import Main from "./pages/Main"

function App() {
  const [coords, setCoords] = useState({ lat: null, lon: null })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    })
  }, [])

  return <Main lat={coords.lat} lon={coords.lon} />
}

export default App