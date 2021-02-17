import React, { useEffect, useState } from 'react';

import './App.css';

import LocationContainer from './components/LocationContainer';
import ResidentContainer from './components/ResidentContainer';
import SearchBox from './components/SearchBox';

import getAllLocations from './helpers/getAllLocations';
import getInfoLocation from './helpers/getInfoLocation';
import getInfoResident from './helpers/getInfoResident';

import randomNumber from './helpers/randomNumber';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
	const [locations, setLocations] = useState( new Array() );

	const [actualID, setActualID] = useState( randomNumber( 108 ) );
	const [dataLocation, setDataLocation] = useState( new Array() );
	const [dataResidents, setDataResidents] = useState( new Array() );

	const [searchText, setSearchText] = useState( '' );
	const [buttonStatus, setButtonStatus] = useState( false );

	const [residentsIsReady, setResidentsIsReady] = useState( false );

	// get all locations and id's
	useEffect( () => {
		const getAll = async () => {
			await getAllLocations()
							.then( ( res ) => {
								setLocations( [...res] );
							})
		}

		getAll();
	}, [ ] );

	// validate location
	useEffect( () => {
		setDataLocation( [] );

		let res;
		try {
			res = locations.find( ( { name } ) => name.toLowerCase() === searchText.toLowerCase() );
		} catch {
			res = null;
		}

		if ( res != null ) {
			setActualID( res.id );
		}

	}, [ buttonStatus ] );

	// get all data from specific id location
	useEffect( () => {
		const getData = async ( ID ) => {
			await getInfoLocation( ID )
							.then( ( res ) => {
								setDataLocation( res.data );
							})
		}

		getData( actualID );
	}, [ actualID ] );

	// get and set residents info from id location
	useEffect(  () => {
		setResidentsIsReady( false );

		let aux = [];
		let final = [];

		const getInfo = async () => {

			if ( dataLocation.residents ) {
				const data = dataLocation.residents.slice(0, 10);

				const promises = data.map( url =>
					getInfoResident.bind( this, url ) );

				await Promise.all( promises.map( (f ) => f( ) ) )
					.then( ( response ) => aux = response )

				aux.map( ( resident ) => {
					final.push( resident.data );
				})

				setDataResidents( final );
				setResidentsIsReady( true );
			}
		}

		getInfo();
	}, [ dataLocation ] );

	return (
		<div className="App align-items-center">
			<div className="container">
				<div className="row mt-3">
					<h1 className="main-title mx-3 my-3">
						{ import.meta.env.VITE_MAIN_TITLE }
					</h1>
				</div>
				<SearchBox
					searchText={ searchText }
					inputHandler={ setSearchText }
					buttonHandler={ setButtonStatus }
				/>
			</div>

			<div className="container mt-3">
			{
				( !dataLocation )
				?
				<LoadingAnimation />
				:
				( dataLocation.residents ) &&
					<LocationContainer
						name={ dataLocation.name }
						type={ dataLocation.type }
						dimension={ dataLocation.dimension }
						residents={ dataLocation.residents }
					/>
			}
			</div>

			<div className="container">
			{
				( residentsIsReady && dataResidents )
				?
					<ResidentContainer
						residents={ dataResidents }
					/>
				:
					<LoadingAnimation />
			}
			</div>
		</div>
	)
}

export default App;