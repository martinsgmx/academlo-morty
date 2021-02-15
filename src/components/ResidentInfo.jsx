import React from 'react';

const ResidentInfo = ( { avatar, name, status, origin, episodes } ) => {

	return (
		<div className="card col-md-3 mx-3 mt-2">
			<img
				className={ ( status === 'Dead' ) ? 'status-dead' : null }
				src={ avatar }
				alt={ name }
			/>
			<h6>
				<strong>{ status }</strong>
			</h6>
			<h5>
				<strong>{ name }</strong>
			</h5>
			<h6>
			No. episodes:
			<span> { episodes.length }</span>
			</h6>
			<select id="episodes" className="mx-2 my-2">
				{
					episodes.map( ( episode ) => {
						return <option key={ episode }>
										{ episode.replace(/https:\/\/rickandmortyapi.com\/api\/episode\//g, '') }
									</option>
						})
				}
			</select>
			<br />
			{
				( status === 'unknown') &&
					<h5 className="blink-text">
						Do you've seen it?
						<br />
						Call the <strong>Police!</strong>
					</h5>
			}
		</div>
	)
}

export default ResidentInfo;