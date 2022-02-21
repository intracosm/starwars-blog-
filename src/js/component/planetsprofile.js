import React from "react";
import propTypes from "prop-types";


export const Planetsprofile = () => {
    const planet = props.location.state;
    return ( <div class="card bg-dark text-white">
    <img src="..." class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title">{props.planet.name}</h5>
      <p class="card-text">{props.planet.climate}</p>
      <p class="card-text">{props.planet.population}</p>
      <p class="card-text">{props.planet.gravity}</p>
      <p class="card-text">{props.planet.rotation_period}</p>
      <p class="card-text">{props.planet.diameter}</p>
     
    </div>
  </div>)
}

Planetsprofile.propTypes = {
    location: propTypes.object,
}
