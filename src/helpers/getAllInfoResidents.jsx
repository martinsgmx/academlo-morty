import React from 'react';

import getInfoResident from './getInfoResident';

const getAllInfoResidents = async ( residents ) => {
	let aux = [];

	residents.map( async ( resident ) => {
		await getInfoResident( resident )
						.then( ( res ) => {
							aux.push( res. data );
						})
	});

	return aux;
}

export default getAllInfoResidents;