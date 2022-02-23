import React, { useContext, useState, useEffect } from "react";


import "../../styles/home.css";
import { Charactercard } from "../component/charactercard.js";

import { Planets } from "../component/planets.js";
import { Context } from "../store/appContext";


export const Home = () => {
  //hook variables that will be populated with api data
  const [characters, setCharacters] = useState([]);
  const [places, setPlaces] = useState([]);
  const { store, actions } = useContext(Context);
  //useeffect that will update arrays onload
  useEffect(() => {
    setCharacters(store.characters)
    setPlaces(store.planets)
  }, [store.characters, store.planets])
  console.log(places);

  // fetch method that will obtain api from people



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
          {places.map((item, index) => {
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
