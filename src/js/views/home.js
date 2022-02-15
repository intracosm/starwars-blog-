import React, { useState,useEffect } from 'react';

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card.js" 

export const Home = () => {
	//hook variables that will be populated with api data 
	const [characters, setCharacters] = useState([]); 
	const [Planets, setPlanets] = useState([]);
	

	//useeffect that will update arrays onload 
useEffect= useEffect(() => {
	fetchCharacters();
fetchPlanets();}, []);

	// fetch method that will obtain api from people 
	
	const fetchCharacters = () =>{
	fetch('https://swapi.dev/api/people')
    .then(response => {
	if (!response.ok) {
	   throw Error(response.statusText);
	}
    	// Read the response as json.
	 return response.json();
     })
    .then(responseAsJson => {
    // Do stuff with the JSONified response
	 console.log(responseAsJson);
     })
    .catch(error => {
	    console.log('Looks like there was a problem: \n', error);
    })};
	
           

	const fetchPlanets = () => { 
		fetch('https://swapi.dev/api/planets')
		.then(response => {
		if (!response.ok) {
		   throw Error(response.statusText);
		}
			// Read the response as json.
		 return response.json();
		 })
		.then(responseAsJson => {
		// Do stuff with the JSONified response
		 console.log(responseAsJson);
		 })
		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		})};
	
	
	
	return(
	<div className="d-flex text-center mt-5">
		
<Card  title={results.name} description="example description" btnLabel="Learn More"  btnURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  imageUrl="https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844"  />
<Card title={results.name} description="example description" btnLabel="Learn More"  btnURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  imageUrl="https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844" />
<Card title={results.name} description="example description" btnLabel="Learn More"  btnURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  imageUrl="https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844" />
<Card title={results.name} description="example description" btnLabel="Learn More"  btnURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  imageUrl="https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844" />
		
	</div>)
};
