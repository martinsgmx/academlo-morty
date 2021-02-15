import React from 'react';
import axios from 'axios';

const getPageLocation = async ( PAGE ) => {
	return await axios.get( `${ import.meta.env.VITE_RM_PAGE }${ PAGE }` );
}

export default getPageLocation;