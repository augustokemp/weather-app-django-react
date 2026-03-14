  import { create } from "zustand"

  const useWeatherStore = create((set) => ({
    isDay: true,
    setIsDay: (value) => set({ isDay: value }),
  }))

  export default useWeatherStore