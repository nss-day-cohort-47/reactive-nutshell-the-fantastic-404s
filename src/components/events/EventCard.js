import React from "react"

import { Link } from "react-router-dom";

export const EventCard = ({ event}) => {

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-eventName">{event.eventName}</span></h3>
        <p>Date: {event.date}</p>
        <h4>Location: {event.location}</h4>
        <section>
        <button>
          Show Weather
        </button>
        <button>
          Edit
        </button>
        <button>
          Delete
        </button>
        </section>
      </div>
    </div>
  );
}