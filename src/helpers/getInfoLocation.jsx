import React from 'react';
import axios from 'axios';

const getInfoLocation = async ( ID ) => {
	return await axios.get( `${ import.meta.env.VITE_RM_LOCATION }${ ID }` );
}

export default getInfoLocation;