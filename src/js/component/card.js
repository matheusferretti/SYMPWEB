import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card m-4">
			<div className="card-header">
				<h5>{props.freelancer.name}</h5>
			</div>
			<div className="card-body">
				<p className="card-title">{props.freelancer.technologies}</p>
				<p className="card-text">{props.freelancer.qualifications}</p>
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					See Profile
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	freelancer: PropTypes.object
};
