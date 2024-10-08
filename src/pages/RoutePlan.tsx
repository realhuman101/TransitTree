
import { useState } from 'react';
import '../assets/CSS/RoutePlan.css'

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
			{routePlanned && <button>Use Route</button>}
		</>
	)
}

export default RoutePlan