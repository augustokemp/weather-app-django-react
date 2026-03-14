import useWeatherStore from "../../store/weatherStore"



function Footer() {
  const licence = useWeatherStore((state) => state.licence)
  const licence_url = useWeatherStore((state) => state.licence_url)

  return (
    <footer className="p-4 text-center">
      <p>
        <a href="https://github.com/augustokemp" target="_blank">
          @augustokemp
        </a>{ }
        &copy; {new Date().getFullYear()} {licence && <a href={licence_url} target="_blank">| {licence}</a>}
      </p>
    </footer>
  )
}

export default Footer