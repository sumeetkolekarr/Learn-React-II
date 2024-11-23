import React from "react";
import { RiMapPinUserFill } from "react-icons/ri";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img">
        <img
          src={props.item.imageUrl}
          alt="Place"
          className="placeImg"
        />
      </div>
      <div className="info">
        <div className="location">
          <RiMapPinUserFill className="locator" />
          <p className="placeName">{props.item.location}</p>
          <a href={props.item.googleMapsLink}>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <h4>{props.item.start_date} - {props.item.end_date}</h4>
        <p>
          {props.item.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
