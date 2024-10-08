import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../assets/CSS/RoutePlan.css';

function RoutePlan() {
	const [routePlanned, setRoutePlanned] = useState(false);

	return (
		<>
			<div id="routePlan">
				<h1>Plan Your Route</h1>
				<form id="RoutePlannerForm" onSubmit={(e) => { 
						e.preventDefault(); 
						setRoutePlanned(true);
					}}>

					<label>From</label>
					<input type="text" id="routePlanFrom" placeholder='Starting Location'/>
					<label>To</label>
					<input type="text" id="routePlanTo" placeholder='Destination'/>
					<input type="submit" value="Find Fastest Route" />
				</form>
			</div>
			<div id="map">

			</div>
			{routePlanned && <button onClick={() => {
				setRoutePlanned(false);
				withReactContent(Swal).fire({
					title: "Another tree has been planted!",
					text: "Successfully prevented around 1,342 grams of CO2 being emitted into the environment!",
					icon: "success",
					color: "#020202",
					background: "#e9ecdd"
				})
			}}>Use Route</button>}
		</>
	)
}

export default RoutePlan