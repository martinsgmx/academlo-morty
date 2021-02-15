import React from 'react';

import getInfoResident from './getInfoResident';

const getAllInfoResidents = async ( residents ) => {
	let aux = [];
	residents.map( async ( resident ) => {
		const res = await getInfoResident( resident );
		aux.push( res.data );
	});

	return aux;
}

export default getAllInfoResidents;