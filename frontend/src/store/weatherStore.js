  import { create } from "zustand"

  const useWeatherStore = create((set) => ({
    isDay: true,
    setIsDay: (value) => set({ isDay: value }),
    licence: null,
    licence_url: null,
    setLicence: (licence, licence_url) => set({licence, licence_url})
  }))

  export default useWeatherStore