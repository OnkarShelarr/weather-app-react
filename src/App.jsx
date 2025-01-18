import React from 'react'
import { useRef, useState , useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import Weather from './Components/Weather/Weather'
// import { inputRef } from './Components/Navbar/Input'
import { inputRef } from './Components/Navbar/Input.jsx';
import axios from 'axios';
import Error from './Components/Error/Error.jsx'
// img of weather 
import clearSky from "./assets/img/sunnyy.png" //clear sky
import clouds from "./assets/img/few-clouds.png" //few clouds //scattered clouds
import brokenClouds from "./assets/img/cloudss.png" //broken clouds
import showerRain from "./assets/img/rainingg.png" //shower rain
import rain from "./assets/img/weather.png" //rain
import thunderstorm from "./assets/img/storm.png" //thunderstorm
import snow from "./assets/img/snowy.png" //snow
import mist from "./assets/img/mist.png" //haze

const App = () => {
  const [data, setdata] = useState()
  const[error,setError]=useState(false)
  const [img,setImg]= useState(clearSky)
  
const apiKey = '6d141bdef194bd9491871e80da1e497a'
const getCity = async(e)=>{
  setError(false)
  e.preventDefault()
 const cityStore = inputRef.current.value || 'Mumbai';
  console.log(cityStore)
try{
let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityStore}&appid=${apiKey}&units=metric`)
console.log(response.data)
setdata(response.data)
console.log(response.data.weather[0].main)
console.log(response.data.name)
      console.log("data", data)
      switch(response.data.weather[0].main){
        case "Haze" :
          setImg(mist)
          break;
          case "Clouds" :
          setImg(clouds)
          break;
          case "Clear" :
          setImg(clearSky)
          break;
          case "Mist" :
          setImg(mist)
          break;
          case "Smoke" :
            setImg(mist)
            break;
            case "Snow" :
            setImg(snow)
            break;
            case "Fog" :
              setImg(mist)
              break;
              case "Rain" :
                setImg(showerRain)
                break;
          default:
            setImg(clearSky)
      }
}catch(e){
  console.log(e)
  setError(true)
}
  
  inputRef.current.value = ""

}
// when component render 
const getData = async()=>{
 
 const cityStore = inputRef.current.value || 'mumbai';
  console.log(inputRef.current.value)
try{
let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityStore}&appid=${apiKey}&units=metric`)
setdata(response.data)
console.log(response.data.name)
      console.log("data", data)
      switch(response.data.weather[0].main){
        case "Haze" :
          setImg(mist)
          break;
          case "Clouds" :
          setImg(clouds)
          break;
          case "Clear" :
          setImg(clearSky)
          break;
          case "Mist" :
          setImg(mist)
          break;
          case "Smoke" :
            setImg(mist)
            break;
            case "Snow" :
            setImg(snow)
            break;
            case "Fog" :
              setImg(mist)
              break;
              case "Rain" :
                setImg(showerRain)
                break;
          default:
            setImg(clearSky)
      }

}catch(e){
  console.log(e)
}

}

useEffect(() => {
  console.log('hi')
  getData()
}, [])
  
  return (
    <div className='poppins dark-gradient'>
      {/* {     console.log(date) } */}
      <Navbar onClick={getCity}/>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4  w-full pt-14 px-2 sm:px-5'>
        {/* Conditional rendering to avoid accessing properties of null */}
        {data ? (
          <>
         {!error? (<Weather
         
         src={img}
            City={data.name} main={data.weather[0].main}
              temp={`${data.main.temp}°C`}
              feelsLike={`${data.main.feels_like}°C`}
              humidity={`${data.main.humidity}%`}
              pressure={`${data.main.pressure} hPa`}
              wind={data.wind.deg}
              visibility={data.visibility}
              
            />):(<Error/>)}
            
            
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  )
}

export default App
