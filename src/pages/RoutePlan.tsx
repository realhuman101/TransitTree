import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from'../assets/CSS/RoutePlan.module.css';

function RoutePlan() {
	const [routePlanned, setRoutePlanned] = useState(false);

	return (
		<>
			<div id={styles.routePlan}>
				<h1>Plan Your Route</h1>
				<form id={styles.RoutePlannerForm} onSubmit={(e) => { 
						e.preventDefault(); 
						setRoutePlanned(true);
					}}>

					<label>From</label>
					<input type="text" id={styles.routePlanFrom} placeholder='Starting Location'/>
					<label>To</label>
					<input type="text" id={styles.routePlanTo} placeholder='Destination'/>
					<input type="submit" value="Find Fastest Route" />
				</form>
			</div>
			<div id={styles.map}>

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