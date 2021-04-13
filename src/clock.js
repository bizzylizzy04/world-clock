import React, { useState, useEffect } from "react";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import dayBG from "./assets/bg-image-daytime.jpg";
import nightBG from "./assets/bg-image-nighttime.jpg";

function ClockTime() {
  let date = new Date(Date.now());
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let clock = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  const [icon, setIcon] = useState(sun);
  const [background, setBackground] = useState(dayBG);
  const [time, setTime] = useState(clock);
  const [timeZone, setTimeZone] = useState('Time Zone');
  const [city, setCity] = useState('city');
  const [country, setCountry] = useState('country');
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    fetch('https://freegeoip.app/json/')
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setCountry(data.country_code)
      }).catch((err) => console.log(err))
  }, [city, country])

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
      .then((response) => response.json())
      .then((data) => {
        if(hours <= 12) {
          setGreeting('Good Morning, It is currently');
          setIcon(sun);
          setBackground(dayBG);
        } else if(hours >= 12 && hours <= 18) {
          setGreeting('Good Afternoon, It is currently');
          setIcon(sun);
          setBackground(dayBG);
        } else {
          setGreeting('Good Evening, It is currently');
          setIcon(moon);
          setBackground(nightBG);
        }
        setTimeZone(data.abbreviation);
      })
  }, [clock, timeZone])

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now());
    }, 1000);
  }, [])

  document.documentElement.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background}) no-repeat center center fixed`
  document.documentElement.style.backgroundSize = `cover`

  return (
    <div className="lower-container move-up">
      <div className="greeting-container">
        <div className="day-night-icon">
        <img src={icon} width="24" height="24" />
        </div>
        <h4>{greeting}</h4>
      </div>

      <div className="clock-container">
        <h1>{clock}</h1>
        <div className="timezone">
          <h4>{timeZone}</h4>
        </div>
      </div>
      <div className="city-co">
        <h3>In {city}, {country}</h3>
      </div>
    </div>
  )
}

export default ClockTime;