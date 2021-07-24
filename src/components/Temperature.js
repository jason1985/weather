import "./Temperature.css"

function kelvinToC(kelvin){
  return Math.floor((kelvin - 273.15))
}

function kelvinToF(kelvin){
  return Math.floor((((kelvin - 273.15) * (9/5)) + 32))
}

//checks if we want celsius or fahrenheit
function temperatureUnit(kelvin,cel){
  if(isNaN(kelvin)) return

  if(cel === false) {
    return kelvinToF(kelvin)
  } else {
    return kelvinToC(kelvin)
  }
}

//takes in Kelvin temperature unit
//if cel true convert to celsius else convert for Fahrenheit
function Temperature({ temp, cel }) {
  return (
    <div className="temperature">
      <div className="temp">{temperatureUnit(temp,cel)}</div>
				<span style={{color: cel ? '#fcf8f1' : null}}  className="c">&deg;C</span>
				<span className="divider">|</span>
				<span style={{color: cel ? null : '#fcf8f1'}} className="f">&deg;F</span>
    </div>
  )
}

export default Temperature