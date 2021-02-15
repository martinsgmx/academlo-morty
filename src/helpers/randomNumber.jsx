import React from 'react';

const randomNumber = ( LIMIT ) => {
	return Math.floor(Math.random() * Math.floor( LIMIT ));
}

export default randomNumber;