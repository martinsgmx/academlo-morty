import React from 'react';

import getPageLocation from './getPageLocation';

const getAllLocations = async ( ) => {
	let pages = 0, aux = [];

	await getPageLocation( 1 )
		.then( ( response ) => {
			pages = response.data.info.pages;
		} );

	for (let page = 1; page <= pages; page++) {
		await getPageLocation( page )
			.then( ( response ) => {
				response.data.results.map( ( location ) => {
					aux.push( { 'id': location.id, 'name': location.name } );
				})
			})
	}

	return aux;
}

export default getAllLocations;