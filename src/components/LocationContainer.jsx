import React from 'react';

const LocationContainer = ( { name, type, dimension, residents } ) => {

	return (
		<div className="row justify-content-center">
			<h2>{ name }</h2>
			<br />
			<h5>
				Type: <strong>{ type }</strong>
			</h5>
			<br />
			<h5>
				Dimension: <strong>{ dimension }</strong>
			</h5>
			<br />
			<h5>
				Population: <strong>{ residents.length }</strong>
			</h5>
		</div>
	)
}

export default LocationContainer;