import React, { useState } from "react"
import { getWeatherByDay } from "../../modules/WeatherManager"
import {  showWeatherSingleDay } from "../weather/WeatherList"
import { Link } from "react-router-dom"
import "./event.css"
export const EventCard = ({ event, handleDeleteEvent }) => {
  const date = new Date();
  const [weather, setWeather] = useState([""])
  const [dailyWeather, setDailyWeather] = useState([""])


  const handleShowWeather = (evt) => {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const eventDateStamp = new Date(event.eventDate)
    let offset = parseInt(Math.floor((eventDateStamp - currentDate) / 86400000))+1
    if(offset > 5){
      setWeather("This date is in the future, so here is today's weather \n have a good one!")}
    offset = (offset > 5 || offset < 0) ? 0 : offset
    getWeatherByDay().then((data) => showWeatherSingleDay(data, offset))
      .then(setDailyWeather)

  }

  return (<>

    <div className="card">
      <div>{weather}</div>
      <div className="card-content">
        <div id="weather">{dailyWeather}</div>
        <div className="eventDetails">
          <h3>Name: <span className="card-eventName">{event.eventName}</span></h3>
          <p>Creator: {event.user.name}</p>
          <p>Date: {event.eventDate}</p>
          <h4>Location: {event.city}, {event.state}</h4>
        </div>
        <section className="eventButtons">
          <button className="eventButton" onClick={handleShowWeather} id={"weatherId__" + event.id}>
            Show Weather
        </button>
          <Link to={`/events/${event.id}/edit`}>
            <button className="eventButton">Edit</button>
          </Link>
          <button className="eventButton" id={"deleteId__" + event.id} onClick={() => { handleDeleteEvent(event.id) }}>
            Delete
        </button>
        </section>
      </div>
    </div>
  </>)
}