import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planets = ({planet}) => {
  return (
    <div className="card pl mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNreDZgxJpbAWeXGM3xd2kwRXojO00-LHIA&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="text-white card-title">{planet.name}</h5>
    <p className="card-text text-white ">climate: {planet.climate}</p>
    <p className="card-text text-white ">diameter: {planet.diameter}</p>
    </div>
  </div>
</div>
</div>
  )}

Planets.propTypes = {
  planets: PropTypes.object,

}