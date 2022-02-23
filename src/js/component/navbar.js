import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><i className="fab fa-jedi-order"></i></span>
			</Link>
			<div className="dropdown ml-auto">
				<Link to="/demo">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						
					</ul>
				</Link>
			</div>
		</nav>
	);
};
