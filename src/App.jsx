import React, { useEffect, useState } from 'react';

import './App.css';
import LocationContainer from './components/LocationContainer';
import ResidentContainer from './components/ResidentContainer';
import SearchBox from './components/SearchBox';
import LoadingAnimation from './components/aux/LoadingAnimation';

import getAllLocations from './helpers/getAllLocations';
import getInfoLocation from './helpers/getInfoLocation';
import randomNumber from './helpers/randomNumber';

function App() {
	const [locations, setLocations] = useState( [] );

	const [searchText, setSearchText] = useState( '' );
	const [isSearch, setIsSearch] = useState( false );

	const [actualIDLocation, setActualIDLocation] = useState( randomNumber( 108 ) );
	const [actualLocation, setActualLocation] = useState( [] );

	const [validLocation, setValidLocation] = useState( true );

	useEffect( async () => {
		const allLocations = await getAllLocations();
		setLocations( [...allLocations] );
	}, [ ] );

	useEffect( async () => {
		setActualLocation( [] );

		let res;
		try {
			res = locations.find( ( { name } ) => name.toLowerCase() === searchText.toLowerCase() );
		} catch {
			res = null;
		}

		if ( res != null ) {
			setActualIDLocation( res.id );
			setValidLocation( true );
		} else {
			setValidLocation( false );
		}
	}, [ isSearch ] )

	useEffect( async () => {
		const res = await getInfoLocation( actualIDLocation );
		setActualLocation( res.data );
	}, [ validLocation ] );

	return (
		<div className="App">
			<h1 className="main-title mt-3">
				{ import.meta.env.VITE_MAIN_TITLE }
			</h1>
			<SearchBox
				searchText={ searchText }
				inputHandler={ setSearchText }
				buttonHandler={ setIsSearch }
			/>

			{
				( !actualLocation.residents ) ?
					<div className="container">
						<LoadingAnimation />
					</div>
				:
					( actualLocation.residents ) &&
					<div className="container">
						<LocationContainer
							name={ actualLocation.name }
							type={ actualLocation.type }
							dimension={ actualLocation.dimension }
							residents={ actualLocation.residents }
						/>
						<div className="container">
						<ResidentContainer
							residents={ actualLocation.residents }
						/>
					</div>
			</div>
			}
		</div>
	)
}

export default App;