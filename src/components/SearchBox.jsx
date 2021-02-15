import React, { Fragment } from 'react';

const SearchBox = ( { searchText, inputHandler, buttonHandler } ) => {

	return (
		<Fragment>
			<input
				type="text"
				id="search-box"
				placeholder="Search a location..."
				value={ searchText }
				onChange={ ( e ) => inputHandler( e.target.value ) }
			/>
			<span>{ '\t'  }</span>
			<button
				className="btn btn-primary"
				onClick={ () => buttonHandler( ( prev ) => !prev ) }
			>
				Search
			</button>
		</Fragment>
	)
}

export default SearchBox;