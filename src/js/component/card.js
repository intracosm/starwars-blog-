import React from "react";
import propTypes from "prop-types";
export const Card = (props) =>{ 
    return (
<div className="card" style={{width: 200}}>
  <img src={props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.btnURL} className="btn btn-primary">{props.btnLabel}</a>
  </div>
</div>)}

Card.propTypes = {
    title: propTypes.string,
    description:propTypes.string, 
    btnLabel:propTypes.string,
    btnURL: propTypes.string,
    imageUrl:propTypes.string,}