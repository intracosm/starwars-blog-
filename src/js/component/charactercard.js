import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Charactercard = ({character}) =>{ 
    return (
<div className="card poi" style={{width: 200}}>
  <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png?fit=1920%2C1080&ssl=1" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="text-white card-title">{character.name}</h5>
    <p className="card-text text-white "> gender: {character.gender}</p>
    <p className="card-text text-white "> haircolor: {character.hair_color}</p>
    <p className="card-text text-white "> eyecolor: {character.eye_color}</p>
    <Link to={{ pathname: "/characterprofile/"+character.name, state: character}}>
            <button href="#" className="btn btn-secondary">
              Learn More!
            </button>
          </Link>
  </div>
</div>)}

Charactercard.propTypes = {
  character: PropTypes.object,
  
}