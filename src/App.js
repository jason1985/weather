import { useEffect, useState } from 'react'
import moment from 'moment'
import Temperature from './components/Temperature'
import UpdateIcon from './components/UpdateIcon'
import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState('New York City')
  const [input, setInput] = useState('New York City')
  const [celsius, setCelsius] = useState(false)
  const [updating, setUpdating] = useState(false)

  //TODO: clean up this useEffect
  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=54d34401fece1e4efc1c4d41e8388c4c`
      )
      const json = await response.json()
      setWeatherData(json)
      console.log(json)
    }

    if(weatherData===null) {//first render
      getWeatherData()
    } else if(updating){
      getWeatherData()
    }
  },[updating,location])

  function handleSubmit(e) {
    e.preventDefault()
    updateWeatherData()
  }

  //only allows for 1 api request every 500ms
  function updateWeatherData(){
    if(updating === true) return 

    setUpdating(true)
    setLocation(input)
    setTimeout(() => {
      setUpdating(false)
    },500);
  }

  return (
    <div className="container">
      <div className="app">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <UpdateIcon updateWeatherData={updateWeatherData} update={updating}/>
        </form>
        <div  className="glass">
          <div className="panel">
            <pre>Raw JSON:{JSON.stringify(weatherData, undefined, 2)}</pre>
          </div>
          <div className="card">
            <div className="date">{moment().format('dddd, Do MMMM')}</div>
            <div className="time">{moment().format('h:mm a')}</div>
            {weatherData?.name ? <div className="location">{weatherData?.name}, {weatherData?.sys?.country}</div>: ""}
            <img src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`} onError={(e)=>{e.target.onerror = null; e.target.src="http://openweathermap.org/img/wn/03n@2x.png"}} alt="weather icon" />
              <Temperature setCelsius={setCelsius} cel={celsius} temp={weatherData?.main?.temp} />
            <div className="description">{weatherData?.weather?.[0]?.description}</div>
            <div className={weatherData?.message ? "error" : ""}>{weatherData?.message}</div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default App



/* <div className="sun"></div> */