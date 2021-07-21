import "./Temperature.css"

function Temperature({ temp, cel }) {
  return (
    <div className="temperature">
      <div className="temp">{temp}</div>
				<span style={{color: cel ? '#fcf8f1' : null}}  className="c">&deg;C</span>
					<span className="divider">|</span>
				<span style={{color: cel ? null : '#fcf8f1'}} className="f">&deg;F</span>
    </div>
  )
}

export default Temperature