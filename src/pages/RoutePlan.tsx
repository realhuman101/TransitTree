import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from'../assets/CSS/RoutePlan.module.css';
import Map from '../assets/components/Map';
import useDebounce from '../assets/scripts/useDebounce';
import carbonEmissionCalc from '../assets/scripts/carbonEmissionCalc';

interface Suggestion {
	display_name: string;
	lat: number;
	lon: number;
}

function RoutePlan() {
	const [distance, setDistance] = useState<number>(0);
	
	const [modifiedAddress, setModifiedAddress] = useState(false); // false = from, true = to

	const [fromAddress, setFromAddress] = useState("");
	const [toAddress, setToAddress] = useState("");

  	const [fromSuggestions, setFromSuggestions] = useState<Array<Suggestion>>([]);
  	const [toSuggestions, setToSuggestions] = useState<Array<Suggestion>>([]);

	const [routePlanned, setRoutePlanned] = useState(false);
	const [startCoord, setStartCoords] = useState<Array<number>>([]);
  	const [endCoord, setEndCoords] = useState<Array<number>>([]);

	const debounceDelay = 700;
	const debounceFrom = useDebounce<string>(fromAddress, debounceDelay);
	const debounceTo = useDebounce<string>(toAddress, debounceDelay);

	useEffect(() => {
		if (debounceFrom.length > 2)
			fetchSuggestions(debounceFrom, false)
	}, [debounceFrom]);

	useEffect(() => {
		if (debounceTo.length > 2)
			fetchSuggestions(debounceTo, true)
	}, [debounceTo]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (modifiedAddress)
			setToAddress(e.target.value);
		else
			setFromAddress(e.target.value);
	};

	const fetchSuggestions = async (query: string, which: boolean) => {
		const response = await fetch(
			`https://nominatim.openstreetmap.org/search?format=json&q=${query}`
		);
		const data = await response.json();

		if (which)
			setToSuggestions(data);
		else
			setFromSuggestions(data);
	};
	
	const handleSuggestionClick = (suggestion: Suggestion) => {
		if (modifiedAddress) {
			setToAddress(suggestion.display_name);
			setToSuggestions([]);
			//@ts-expect-error its 3AM im not assed to fix this
			setEndCoords([parseFloat(suggestion.lat),parseFloat(suggestion.lon)]);
		} else {
			setFromAddress(suggestion.display_name);
			setFromSuggestions([]);
			//@ts-expect-error its 3AM im not assed to fix this
			setStartCoords([parseFloat(suggestion.lat),parseFloat(suggestion.lon)]);
		}
	};

	return (
		<div id={styles.routePlanFull}>
			<div id={styles.routePlan}>
				<h1>Plan Your Route</h1>

				<form id={styles.RoutePlannerForm} onSubmit={(e) => { 
						e.preventDefault(); 
						setRoutePlanned(true);
					}}>

					<label className={styles.label}>From</label>
					<input type="text" value={fromAddress} className={styles.input} id={styles.routePlanFrom} onFocus={() => setModifiedAddress(false)} onChange={handleInputChange} placeholder='Starting Location'/>
					{(fromSuggestions.length > 0 && !modifiedAddress) && (
						<ul className={styles.suggestionBox}>
						{fromSuggestions.map((suggestion, index) => (
							<li
							key={index}
							onClick={() => {setModifiedAddress(true);handleSuggestionClick(suggestion)}}
							className={styles.suggestion}
							>
							{suggestion.display_name}
							</li>
						))}
						</ul>
					)}

					<label className={styles.label}>To</label>
					<input type="text" value={toAddress} className={styles.input} id={styles.routePlanTo} onFocus={() => setModifiedAddress(true)} onChange={handleInputChange} placeholder='Destination'/>
					{(toSuggestions.length > 0 && modifiedAddress) && (
						<ul className={styles.suggestionBox}>
						{toSuggestions.map((suggestion, index) => (
							<li
							key={index}
							onClick={() => {setModifiedAddress(false);handleSuggestionClick(suggestion)}}
							className={styles.suggestion}
							>
							{suggestion.display_name}
							</li>
						))}
						</ul>
					)}

					<div id={styles.disabledCheck}>
						<input type="checkbox"/>
						<label>I'm on a Wheelchair</label>
					</div>
					<input id={styles.submit} type="submit" value="Find Fastest Route" />
				</form>
			</div>
			<div id={styles.map}>

			<Map route={routePlanned} startCoords={startCoord} endCoords={endCoord} setMiles={setDistance}/>

			</div>
			<button className={routePlanned ? "" : styles.hiddenButton} onClick={() => {
				setFromAddress('');
				setToAddress('');
				setFromSuggestions([]);
				setToSuggestions([]);
				setStartCoords([]);
				setEndCoords([]);
				setRoutePlanned(false);
				withReactContent(Swal).fire({
					title: "Another tree has been planted!",
					text: `Successfully prevented around ${carbonEmissionCalc(distance).toLocaleString()} grams of CO2 being emitted into the environment!`,
					icon: "success",
					color: "#020202",
					background: "#e9ecdd"
				})
			}}>Use Route</button>
		</div>
	)
}

export default RoutePlan