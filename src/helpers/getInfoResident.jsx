import React from 'react';
import axios from 'axios';

const getInfoResident = async ( URL ) => {
	return await axios.get( URL );
}

export default getInfoResident;