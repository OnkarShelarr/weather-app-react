import React, { useEffect, useRef, useState } from 'react';
import "../City/city.css";
import eye from "../../assets/img/eye.png"
import humidity from "../../assets/img/humidity.png"
import pressure from "../../assets/img/pressure.png"
import wind from "../../assets/img/wind-1.png"
// img of weather 
import clearSky from "../../assets/img/sunnyy.png" //clear sky
import clouds from "../../assets/img/few-clouds.png" //few clouds //scattered clouds
import brokenClouds from "../../assets/img/cloudss.png" //broken clouds
import showerRain from "../../assets/img/rainingg.png" //shower rain
import rain from "../../assets/img/weather.png" //rain
import thunderstorm from "../../assets/img/storm.png" //thunderstorm
import snow from "../../assets/img/snowy.png" //snow
import mist from "../../assets/img/mist.png" //mist
export let themeToggle;



const Weather = (props) => {
themeToggle = useRef('bg-dark')

    return (

        <div href="#" ref={themeToggle} className="bg-dark rounded-xl box-shadow flex flex-col justify-around md:flex-row py-5 w-full sm:max-w-screen-xl sm:py-5 h-[800px] md:h-96 px-5">
            <div className='font-extrabold flex flex-col items-center justify-center gap-3'>
                
                <h1 className='text-[36px]'>{props.City}</h1>
            <h1 className='text-[60px] md:text-[80px]'>{props.temp}</h1>
            <h3><span className='text-[20px] md:text-[20px]'>Feels like:</span> <span className='text-[22px] md:text-[32px]'>{props.feelsLike}</span></h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center gap-2'>
            <img src={props.src} alt="img" className='w-[200px]'/>
            <h3 className='text-[32px]'>{props.main}</h3>
            </div>
            <div className='font-extrabold flex flex-col items-center justify-center gap-3'>
            <div className='flex items-center  gap-8'>
                <figure><img src={humidity} alt="img" id="humidity" /> <figcaption className='flex flex-col text-center'><span> {props.humidity}</span> <span>Humidity</span></figcaption></figure>


                <figure><img src={wind} alt="img" id="wind"/> <figcaption className='flex flex-col text-center'> <span>{props.wind}m/s</span> Wind </figcaption></figure>
            </div>

            <div className='flex items-center  gap-8'>
                
                <figure><img src={pressure} id="pressure" alt="img" /> <figcaption className='flex flex-col text-center'><span>{props.
pressure
}</span>Pressure </figcaption></figure>
                <figure><img src={eye} alt="img" id="visibility" /> <figcaption className='flex flex-col text-center'> <span> {props.visibility} m/s</span> Visibility</figcaption></figure>
            </div>
            </div>

        </div>
    );
};

export default Weather;
