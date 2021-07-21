import { useEffect, useState } from 'react'
import "./App.css"
import moment from 'moment'

function App() {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState('Saigon')
  const [input, setInput] = useState('Saigon')
  const [celsius, setCelsius] = useState(false)

  const getData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=54d34401fece1e4efc1c4d41e8388c4c`
    )
    const json = await response.json()
    setData(json)
    console.log(json)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  function handleSubmit(e) {
    e.preventDefault()
    setLocation(input)
  }

  function kelvinToC(kelvin){
    return Math.floor((kelvin - 273.15))
  }
  
  function kelvinToF(kelvin){
    return Math.floor((((kelvin - 273.15) * (9/5)) + 32))
  }

  //checks if we want celsius or fahrenheit
  function tempStandard(kelvin){
    if(isNaN(kelvin)) return

    if(celsius === false) {
      return kelvinToF(kelvin)
    } else {
      return kelvinToC(kelvin)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
          <button onClick={()=>setCelsius(!celsius)}>celcius</button>
      <div  className="glass">
        <div className="panel">
          <pre>Raw JSON:{JSON.stringify(data, undefined, 2)}</pre>
        </div>
        <div className="card">
          <div className="date">{moment().format('dddd, Do MMMM')}</div>
          <div className="time">{moment().format('h:mm a')}</div>
          {data?.name ? <div className="location">{data?.name}, {data?.sys?.country}</div>: ""}
          <img src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`} alt="weather icon" />
          {data?.main?.temp ?
            <div className="temp">
              {tempStandard(data?.main?.temp)}&deg;
            </div>
          : ""}
          <div className="description">{data?.weather?.[0]?.description}</div>
          <div className="error">{data?.message}</div>
        </div>
      </div>
{/* <div className="sun"></div> */}
    </div>
  )
}

export default App



/* <h3>High: {data?.main?.temp_max}</h3>
<h3>Low: {data?.main?.temp_min}</h3> */