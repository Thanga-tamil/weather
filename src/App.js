import React, {useState} from "react";
import axois from "axios"

function App() {

  const [data,setdata] = useState({})
  const [location,setlocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c2caacf5f35d72b1626922314925402a`
   
 const searchLocation = (event)=>{
  if(event.key === "Enter"){

    axois.get(url).then((response) => {
      setdata(response.data)
      console.log(response.data)
    })
    setlocation('')
   }

  }
 
  return (
    <div className="app">
      <div className="search">
        <input type="text" 
        value={location} 
        onChange={event=>setlocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"/>

        
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}*F</h1> : null}
            </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>

        </div>

{data.name != undefined &&
  
    <div className="bottom">
    <div className="feels">
      {data.main ? <p className="bold">{data.main.feels_like.toFixed()}*F</p> : null}
      <p>Feels Like</p>
  
  </div>

    <div className="humidity">
      {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
      <p>Humidity</p>

    </div>

      <div className="wind">
      {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
 

      <p>Wind Speed</p></div>

</div>

}

      </div>
    </div>
    
  );
}

export default App;
