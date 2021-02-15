import React from 'react';

import './LoadingAnimation.css';

const LoadingAnimation = () => {
	return (
		<div className="lds-ripple">
			<div></div>
			<div></div>
		</div>
	)
}

export default LoadingAnimation;