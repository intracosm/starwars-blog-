import React from "react";
import propTypes from "prop-types";

export const CharacterProfile = ({match}) => {

    let character = props.location.state
    return (<div class="card mb-3" style={{maxWidth: "540px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 className="card-title">{match.name}</h5>
                    <p className="card-text">birthyear:{match.birthyear}</p>
                    <p className="card-text">gender:{match.gender}</p>
                    <p className="card-text">skin color:{match.skin_color}</p>
                    <p className="card-text">height:{match.height}</p>
                    <p className="card-text">eye color:{match.eye_color}</p>
        </div>
      </div>
    </div>
  </div>)
}

CharacterProfile.propTypes = {
    match: propTypes.object,
}