import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

import getAllInfoResidents from '../helpers/getAllInfoResidents';

const ResidentContainer = ( { residents } ) => {
	const [infoResidents, setInfoResidents] = useState( [] );

	useEffect( async () => {

		try {
			residents = residents.slice(0, 10);
			await getAllInfoResidents( residents )
				.then( ( data ) => {
				setInfoResidents( data );
			})
		} catch ( error ) {
			// console.log( error );
		}
	}, [ residents ] );

	return (
		<div className="row justify-content-center">
			{ infoResidents.map( ( resident ) => {
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