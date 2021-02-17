import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentContainer = ( { residents } ) => {

	return (
		<div className="row mx-3 my-3 justify-content-center">
			{ residents.map( ( resident ) => {
				return <ResidentInfo
									key={ resident.name }
									avatar={ resident.image }
									name={ resident.name }
									status={ resident.status }
									origin={ resident.origin.name }
									episodes={ resident.episode }
								/>
				} )
			}
		</div>
	)
}

export default ResidentContainer;