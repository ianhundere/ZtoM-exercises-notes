import React from 'react';

const Result = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<h2>{name}</h2>
				<p>{height}</p>
				<p>{mass}</p>
				<p>{hair_color}</p>
				<p>{skin_color}</p>
				<p>{eye_color}</p>
				<p>{birth_year}</p>
				<p>{gender}</p>
			</div>
		</div>
	);
};

export default Result;
