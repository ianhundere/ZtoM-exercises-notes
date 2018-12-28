import React from 'react';
import Result from './Result';

const Results = ({ results }) => {
	return (
		<div>
			{results.map((character, i) => {
				return (
					<Result
						key={i}
						name={character.name}
						height={character.height}
						mass={character.mass}
						hair_color={character.hair_color}
						skin_color={character.skin_color}
						eye_color={character.eye_color}
						birth_year={character.birth_year}
						gender={character.gender}
					/>
				);
			})}
		</div>
	);
};

export default Results;
