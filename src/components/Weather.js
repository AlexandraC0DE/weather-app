import React from 'react';
import {useEffect,useState} from "react";
import axios from 'axios';

const Weather = () => {

    const [data, setData] = useState({});
    const [isClick, setIsClick] = useState(true);

  useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position) =>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e985fc98311a502573b6e08da2a5e6d4`)
             .then((res) => setData(res.data));
      }, (error) =>{
          console.error(error);
          console.log('Ups ha ocurrido un error')
    });
      }, [])
 
      const handleConverter = () => {
        setIsClick(!isClick);
    }
    
    return (
        <div className='card-container'>

                
                <div className='card-title'>
                    <h1>Wheater App</h1>
                    <h3>{data?.name} - {data?.sys?.country}</h3>
               

                <div className='card-icon'>
                    <img src={`http://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`} alt="" />
                </div>

                <div className='card-data'>
                    <h4>"Scattered clouds"</h4>
                    <p><span className='one'><i className="fas fa-wind"></i> Wind speed:</span> {data?.wind?.speed} m/s</p>
                    <p><span className='two'><i className="fas fa-cloud"></i> Humidity:</span> {data?.main?.humidity}% </p>
                    <p><span className='three'><i className="fas fa-thermometer-three-quarters"></i> Pressure:</span> {data?.main?.pressure}mb</p>
                </div>

                <div className='card-temperature'>
                    <span><b> {isClick ? (`${(data?.main?.temp - 273).toFixed(2)} °C`): (`${((data?.main?.temp - 273.15) * 9/5 + 32 ).toFixed(2)} °F`)}</b></span>
                    <button className='btn' onClick={handleConverter}>Degrees °F/°C</button>
                </div>               
                </div>
        </div>
    )
}

export default Weather;