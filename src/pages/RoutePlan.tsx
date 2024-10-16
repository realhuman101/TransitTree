import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from'../assets/CSS/RoutePlan.module.css';
import Map from '../assets/components/Map';
import useDebounce from '../assets/scripts/useDebounce';
import carbonEmissionCalc from '../assets/scripts/carbonEmissionCalc';
import { useCookies } from 'react-cookie';

interface Suggestion {
	display_name: string;
	lat: number;
	lon: number;
}

function RoutePlan() {
	const [distance, setDistance] = useState<number>(0);
	const [cookies, setCookies] = useCookies(['treesPlanted', 'CO2amt', 'coins']);

	const [modifiedAddress, setModifiedAddress] = useState(false); // false = from, true = to

	const [fromAddress, setFromAddress] = useState("");
	const [toAddress, setToAddress] = useState("");

  	const [fromSuggestions, setFromSuggestions] = useState<Array<Suggestion>>([]);
  	const [toSuggestions, setToSuggestions] = useState<Array<Suggestion>>([]);

	const [isSelectingSuggestion, setIsSelectingSuggestion] = useState(false);

	const [routePlanned, setRoutePlanned] = useState(false);
	const [startCoord, setStartCoords] = useState<Array<number>>([]);
  	const [endCoord, setEndCoords] = useState<Array<number>>([]);

	const [tab, setTab] = useState<'public' | 'private'>('public');

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
		if (!isSelectingSuggestion) {
			if (modifiedAddress)
				setToAddress(e.target.value);
			else
				setFromAddress(e.target.value);
		}
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
		setIsSelectingSuggestion(true);
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

		setFromSuggestions([]);
		setToSuggestions([]);
		setIsSelectingSuggestion(false);
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
						<label>I need accessible routes</label>
					</div>
					<input id={styles.submit} type="submit" value="Find Fastest Route" />
				</form>
			</div>
			<div id={styles.map}>

			<div id={styles.mapBox}>
				<Map route={routePlanned} startCoords={startCoord} endCoords={endCoord} setMiles={setDistance} mode={tab}/>
				<div className={styles.tabs}>
					<button
						className={tab === 'public' ? styles.activeTab : styles.inactiveTab}
						onClick={() => setTab('public')}
					>Public</button>
					<button
						className={tab === 'private' ? styles.activeTab : styles.inactiveTab}
						onClick={() => setTab('private')}
					>Private</button>
				</div>
			</div>
			</div>
			<button className={routePlanned ? "" : styles.hiddenButton} onClick={() => {
				const CO2saved = carbonEmissionCalc(distance);
				
				setFromAddress('');
				setToAddress('');
				setFromSuggestions([]);
				setToSuggestions([]);
				setStartCoords([]);
				setEndCoords([]);
				setRoutePlanned(false);
				withReactContent(Swal).fire({
					title: "Another tree has been planted!",
					text: `Successfully prevented around ${CO2saved.toLocaleString()} kilograms of CO2 being emitted into the environment!`,
					icon: "success",
					color: "#020202",
					background: "#e9ecdd"
				})
				const newCO2 = (cookies.CO2amt ? cookies.CO2amt : 500000) + CO2saved;

				setCookies("CO2amt", newCO2);
				setCookies("treesPlanted", newCO2/100000)
				setCookies("coins", Math.floor((cookies.coins ? cookies.coins : 15) + newCO2/100000))
			}}>Use Route</button>
		</div>
	)
}

export default RoutePlan