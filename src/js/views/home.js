import React, { useState, useEffect } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Charactercard } from "../component/charactercard.js";
import { Navbar } from "../component/navbar";
import { Planets } from "../component/planets.js";


export const Home = () => {
  //hook variables that will be populated with api data
  const [characters, setCharacters] = useState([]);
  const [Places, setPlaces] = useState([]);

  //useeffect that will update arrays onload
  useEffect(() => {
    getData("https://swapi.dev/api/people", setCharacters);
    getData("https://swapi.dev/api/planets", setPlaces);
  }, []);

  // fetch method that will obtain api from people

  const getData = (url,setter) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then((data) => {
        // Do stuff with the JSONified response,
        setter(data.results);

      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

 
  // return, will have to populate the divs with the card component itself populated by the data fetched by the api.
  return (

    <div className="space container-fluid">
      <img src="https://cdn.shopify.com/s/files/1/1057/4964/t/24/assets/star-wars-banner.jpeg?v=8062412087493492290" className="bannerimage card-img-top" alt="..." />
      <h2 className="text-white" >Characters</h2>
      <div className="d-flex text-center mt-5">
        <div className="row">
          {characters.map((item, index) => {
            return (
              <Charactercard
                key={index}
                character={item}
              />
            );
          })}
        </div>
      </div>
      <h2 className="text-white ">Planets</h2>
      <div className="d-flex text-center mt-5">
        <div className="row">
          {Places.map((item, index) => {
            return (
              <Planets
                key={index}
                planet={item}
              />
            );
          })}
        </div>
      </div>
    </div>

  );
};
