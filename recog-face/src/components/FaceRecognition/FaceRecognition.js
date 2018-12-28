import React from 'react';

const FaceRecogition = ({ imageUrl }) => {
	return (
		<div className="center ma">
			<div className="absolute mt2">
				<img alt="your chosen pic" src={imageUrl} width="500px" heigh="auto" />
			</div>
		</div>
	);
};

export default FaceRecogition;
