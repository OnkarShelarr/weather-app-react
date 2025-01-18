import React, { useState, useEffect } from "react";
import { themeToggle } from "../Weather/Weather";
import pressureBlack from "../../assets/img/pressure-white 1.png"
import pressure from "../../assets/img/pressure.png"
import eyeWhite from "../../assets/img/eye.png"
import eyeDark from "../../assets/img/eye dark.png"
import humidityWhite from "../../assets/img/humidity.png"
import humidityDark from "../../assets/img/humidity 1.png"
import windWhite from "../../assets/img/wind-1.png"
import windDark from "../../assets/img/wind 1.png"
const Toggle = () => {
    const [theme, setTheme] = useState("dark"); // Default theme 
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };


    useEffect(() => {
        document.body.className = ""; // Clear all body classes
        document.body.classList.add(`theme-${theme}`);
        const elements = document.querySelectorAll(".bg-dark, .bg-light"); // Select all matching elements
        elements.forEach((element) => {
            element.classList.remove("bg-dark", "bg-light"); // Remove the old class
            element.classList.add(`bg-${theme}`); // Add the new theme class
        });
        switch(theme){
case "light":
    const pressureImg = document.getElementById("pressure");
        const humidityImg = document.getElementById("humidity");
        const windImg = document.getElementById("wind");
        const visibilityImg = document.getElementById("visibility");
        if (pressureImg) pressureImg.src = pressureBlack;
        if (humidityImg) humidityImg.src = humidityDark;
        if (windImg) windImg.src = windDark;
        if (visibilityImg) visibilityImg.src = eyeDark;
        break;
        case "dark":
            const pressureImgDark = document.getElementById("pressure");
            const humidityImgDark = document.getElementById("humidity");
            const windImgDark = document.getElementById("wind");
            const visibilityImgDark = document.getElementById("visibility");
    
            // Check if the elements exist before trying to change the src
            if (pressureImgDark) pressureImgDark.src = pressure;
            if (humidityImgDark) humidityImgDark.src = humidityWhite;
            if (windImgDark) windImgDark.src = windWhite;
            if (visibilityImgDark) visibilityImgDark.src = eyeWhite;
            break;
          default:
            break;

        }
    }, [theme]);
    useEffect(() => {
    
    }, [])
    

    return (
        <div className="sm:w-48">
            <button
                onClick={toggleTheme}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full"
            >
                 {theme === "light" ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
};

export default Toggle;
